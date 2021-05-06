'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index() {
    const category = await Category.all()
    return category
  }

  async store({ request }) {
    const data = request.only(['description', 'category_id'])

    const category = await Category.create(data)
    return category
  }

  async update({ params, request }) {
    const category = await Category.findOrFail(params.id)
    const data = request.only(['description', 'category_id'])

    category.merge(data)
    category.save()
    return category
  }

  async destroy({ params, request, response }) {
    const category = await Category.findOrFail(params.id)

    category.delete()
    return response.status(200).json({
      message: 'Category deleted'
    })
  }
}

module.exports = CategoryController
