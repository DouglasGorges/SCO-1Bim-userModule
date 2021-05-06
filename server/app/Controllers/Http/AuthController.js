'use strict'

const User = use('App/Models/User')
const Permission = use('App/Models/Permission')

class AuthController {
  async register({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)
    const permission = await Permission.create({
      user_id: user.id,
      component_id: 1
    })

    return { user, permission }
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
