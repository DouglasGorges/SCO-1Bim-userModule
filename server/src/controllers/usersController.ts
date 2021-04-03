import { json, Request, Response } from 'express'

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

    try {

    } catch (err) {
      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while new User'
      })
    }
  }
}