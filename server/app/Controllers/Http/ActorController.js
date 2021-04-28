'use strict'

const Actor = use('App/Models/Actor')

class ActorController {
  async register({ request }) {
    const data = request.only(
      ['name', 'oin', 'phone', 'address', 'zipCode', 'cityId', 'personType', 'employeeType']
    )

    const actor = await Actor.create(data)
    return actor
  }
}

module.exports = ActorController
