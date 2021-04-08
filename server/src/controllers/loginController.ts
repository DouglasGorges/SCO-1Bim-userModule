import { Request, Response } from 'express'

import db from '../database/connection'

export default class LoginController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const userValidate = await db('users')
        .where(function () {
          this.where('email', email).where('password', password)
        })

      if (userValidate.length > 0) {
        const responseUser = {
          "firstName": userValidate[0].firstname,
          "lastName": userValidate[0].lastname,
          "email": userValidate[0].email
        }

        return res.status(200).json(responseUser)
      } else {
        return res.status(401).json({
          message: "Invalid Email or Password"
        })
      }

    } catch (err) {
      return res.status(400).json({
        error: 'Unexpected error while User Validate'
      })
    }
  }
}