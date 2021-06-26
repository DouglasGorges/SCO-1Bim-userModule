'use strict'

const Order = use('App/Models/Order')
const OrderInstallment = use('App/Models/OrderInstallment')
const Cart = use('App/Models/Cart')
const Customer = use('App/Models/Actor')

class OrderController {

  async index() {
    return Order.all();
  }

  async show({params}) {
    const order = await Order.findOrFail(params.id)
    await order.load('customer')
    await order.load('installments')
    return order
  }

  async store({request}) {

    if (!request.input('payment_method')) {
      return response.status(405).json({
        message: 'PAYMENT_METHOD não informado'
      })
    }

    if (!request.input('installments')) {
      return response.status(405).json({
        message: 'INSTALLMENTS não informado'
      })
    }

    if (!request.input('customer_id')) {
      return response.status(405).json({
        message: 'CUSTOMER_ID não informada'
      })
    }

    if (!request.input('cart_id')) {
      return response.status(405).json({
        message: 'CART_ID não informada'
      })
    }

    const data = request.only(['cart_id', 'customer_id', 'payment_method', 'installments'])

    const cart = await Cart.query().where('cart_id', request.input('cart_id')).with('product').fetch();

    data.total = await this.getCartTotal(cart)

    data.payment_status = (data.payment_method === 'credit_card' ? 'paid' : 'waiting_payment')
    data.shipping_status = (data.payment_status === 'paid' ? 'in_separation' : 'waiting_payment')

    const order = await Order.create(data);

    let valueInstallment = (data.total / request.input('installments'))

    for (let i = 1; i <= request.input('installments'); i++) {
      let installment = {
        installment_price: valueInstallment,
        order_id: order.id,
        payment_status: data.payment_status,
        payment_method: data.payment_method,
        installment: i,
        expire_date: '2021-06-25'
      }
      const orderInstallment = OrderInstallment.create(installment);
    }

    return order
  }

  async getCartTotal(cart) {
    let cartTotal = 0
    let products = []
    cart = cart.toJSON()
    await cart.forEach((cart) => {
      if (cart.product) {
        cartTotal += (cart.quantity * cart.product.retailPrice)
      }
    })
    return cartTotal
  }

  async update({params, request}) {
    const lot = await Lot.findOrFail(params.id)
    const data = request.only(
      ['product_id', 'quantityBalance', 'expiryDate']
    )

    lot.merge(data)
    lot.save()
    return lot
  }

  async destroy({params, response}) {
    const lot = await Lot.findOrFail(params.id)
    lot.delete()

    return response.status(200).json({
      message: 'Lot deleted'
    })
  }
}

module.exports = OrderController
