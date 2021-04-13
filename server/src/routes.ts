import express from 'express'
import UsersController from './controllers/usersController'
import LoginController from './controllers/loginController'
const routes = express.Router()

const usersController = new UsersController()
const loginController = new LoginController()

routes.get('/', (req, res) => {
  res.status(200).send('OK')
})

routes.post('/create/user', usersController.create)
routes.post('/users/authenticate', loginController.store)

export default routes