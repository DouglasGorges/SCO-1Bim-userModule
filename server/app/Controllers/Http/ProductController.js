'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index() {
    const product = await Product.all()
    return product
  }

  async store({ request }) {
    const data = request.only(
      ['manufacturer_id', 'name', 'label', 'ean', 'retailPrice', 'measurement_unit_id', 'category_id']
    )

    const product = await Product.create(data)
    return product
  }

  async update({ params, request, response }) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(
      ['manufacturer_id', 'name', 'label', 'ean', 'retailPrice', 'measurement_unit_id', 'category_id']
    )
    product.merge(data)
    product.save()
    return product
  }

  async destroy({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
    return response.status(200).json({
      message: '"Product Deleted"'
    })
  }
}

module.exports = ProductController
