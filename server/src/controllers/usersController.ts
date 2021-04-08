import { Request, Response } from 'express'

import db from '../database/connection'

export default class ConnectionController {
  async index(req: Request, res: Response) {
    const totalUsers = await db('users').count('* as total')
    const { total } = totalUsers[0]
    return res.json({ total })
  }

  async create(req: Request, res: Response) {
    const {
      firstname,
      lastname,
      document,
      email,
      password,
      idActive
    } = req.body

    const userValidate = await db('users')
      .where(function () {
        this.where('email', email)
      })
      .orWhere('document', document)

    if (userValidate.length > 0) {
      return res.status(406).json({
        message: 'User already exists!'
      })
    }

    const trx = await db.transaction()

    try {

      const insertUsers = await trx('users').insert({
        firstname,
        lastname,
        document,
        email,
        password,
        idActive
      })

      const idUser = insertUsers[0]

      const insertPermissions = await trx('permissions').insert({
        idUser,
        idComponent: 1
      })

      await trx.commit()

      res.status(201).send()
    } catch (err) {
      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while new User'
      })
    }
  }
}