import express from 'express'
const routes = express.Router()

routes.get('/', (req, res) => {
  res.status(200).send('OK')
})

routes.post('/', (req, res) => {

})

export default routes