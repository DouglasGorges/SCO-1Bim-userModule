'use strict'

const Actor = use('App/Models/Actor')

class ActorController {
  async index() {
    const actor = await Actor.all()

    return actor
  }

  async store({ request }) {
    const data = request.only(
      ['name', 'oin', 'phone', 'address', 'zipCode', 'personType', 'employeeType', 'email', 'password', 'city_id', 'createdBy']
    )

    const actor = await Actor.create(data)
    return actor
  }

  async update({ params, request, response }) {
    const actor = await Actor.findOrFail(params.id)
    const data = request.only(
      ['name', 'oin', 'phone', 'address', 'zipCode', 'city_id', 'personType', 'employeeType']
    )

    actor.merge(data)
    actor.save()
    return actor
  }

  async findByEmail({ params, response }) { //Wesleyson Por favor, melhore a busca abaixo. Precisamos buscar o ACTOR atraves do e-mail digitado no login.
    return await Actor.find(await Actor.query().where('email', '=', params.email).ids())
  }

  async findByPersonType({ params, response }) {
    return await Actor.query().where('personType', '=', params.type).fetch()
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
