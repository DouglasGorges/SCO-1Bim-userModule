'use strict'

const Actor = use('App/Models/Actor')

class ActorController {
  async index() {
    const actor = await Actor.all()

    return actor
  }

  async store({ request }) {
    const data = request.only(
      ['name', 'oin', 'phone', 'address', 'zipCode', 'cityId', 'personType', 'employeeType']
    )

    const actor = await Actor.create(data)
    return actor
  }

  async update({ params, request, response }) {
    const actor = await Actor.findOrFail(params.id)
    const data = request.only(
      ['name', 'oin', 'phone', 'address', 'zipCode', 'cityId', 'personType', 'employeeType']
    )

    actor.merge(data)
    actor.save()
    return actor
  }

  async destroy({ params, response }) {
    const actor = await Actor.findOrFail(params.id)
    actor.delete()
    return response.status(200).json({
      message: 'Actor deleted'
    })
  }
}

module.exports = ActorController
