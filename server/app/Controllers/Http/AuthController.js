'use strict'

const Actor = use('App/Models/Actor')
const Permission = use('App/Models/Permission')

class AuthController {
  async register({ request }) {
    const data = request.only(['oin', 'email', 'password'])

    const actor = await Actor.create(data)
    const permission = await Permission.create({
      idactor: actor.id,
      idComponent: 1
    })

    return { actor, permission }
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
