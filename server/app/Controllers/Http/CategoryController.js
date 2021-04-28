'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async register({ request }) {
    const data = request.only(['description', 'categoryId'])

    const category = await Category.create(data)
    return category
  }
}

module.exports = CategoryController
