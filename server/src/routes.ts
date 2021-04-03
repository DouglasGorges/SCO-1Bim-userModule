import express from 'express'
import UsersController from './controllers/usersController'
const routes = express.Router()

const usersController = new UsersController()

routes.get('/', (req, res) => {
  res.status(200).send('OK')
})

routes.post('/create', usersController.create)

export default routes