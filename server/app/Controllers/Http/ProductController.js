'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async register({ request }) {
    const data = request.only(
      ['manufacturerId', 'name', 'label', 'ean', 'retailPrice', 'measurementUnitId', 'categoryId']
    )

    const product = await Product.create(data)
    return product
  }

  async up({ request }) {
    const data = request.only(
      ['productId', 'manufacturerId', 'name', 'label', 'ean', 'retailPrice', 'measurementUnitId', 'categoryId']
    )

    const product = await Product.onUpdate('')
  }
}

module.exports = ProductController
