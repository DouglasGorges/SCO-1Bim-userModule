'use strict'

const Cart = use('App/Models/Cart')
const Product = use('App/Models/Product')

class CartController {
  async show({params, response}) {

    if (!params.id) {
      return response.status(405).json({
        message: 'ID de Carrinho não informado'
      })
    }

    const cart = await Cart.query().where('cart_id', params.id).with('product').fetch();

    if (!cart.rows.length) {
      return response.status(404).json({
        message: 'Carrinho informado não encontrado ou vazio'
      })
    }

    return this.transformCart(params.id, cart)
  }

  async transformCart(cartId, cart) {
    let cartTotal = 0
    let products = []
    cart = cart.toJSON()
    await cart.forEach((cart) => {
      if (cart.product) {
        cartTotal += (cart.quantity * cart.product.retailPrice)
        products.push({
          id: cart.product.id,
          ean: cart.product.ean,
          name: cart.product.name,
          label: cart.product.label,
          quantity: cart.quantity,
          price: cart.product.retailPrice,
          total: cart.quantity * cart.product.retailPrice
        })
      }
    })
    return {cartId, cartTotal, products}
  }

  async store({request}) {

    if (!request.input('product_id')) {
      return response.status(405).json({
        message: 'PRODUCT_ID não informado'
      })
    }

    if (!request.input('quantity')) {
      return response.status(405).json({
        message: 'QUANTITY não informada'
      })
    }

    if (request.input('cart_id')) {
      const checkCart = await Cart.query().where('cart_id', request.input('cart_id')).where('product_id', request.input('product_id')).first()
      if (checkCart) {
        const product = await Product.find(checkCart.product_id)
        checkCart.product_price = parseFloat(product.retailPrice)
        checkCart.quantity = parseFloat(request.input('quantity'))
        checkCart.save()
        return checkCart
      }
    }

    const data = request.only(['cart_id', 'product_id', 'quantity'])

    const product = await Product.find(data.product_id)
    data.product_price = parseFloat(product.retailPrice)

    const cart = await Cart.create(data)
    if (!request.input('cart_id')) {
      cart.cart_id = cart.id
      cart.save()
    }
    return cart
  }

  async destroy({request, response}) {

    if (!request.input('cart_id')) {
      return response.status(405).json({
        message: 'CART_ID não informado'
      })
    }

    if (!request.input('product_id')) {
      return response.status(405).json({
        message: 'PRODUCT_ID não informado'
      })
    }

    const checkCart = await Cart.query().where('cart_id', request.input('cart_id')).where('product_id', request.input('product_id')).first()

    return response.status(200).json({
      message: 'Produto excluído do carrinhos de compra.'
    })
  }
}

module.exports = CartController
