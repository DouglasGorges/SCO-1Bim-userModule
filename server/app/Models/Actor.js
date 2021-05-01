'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Actor extends Model {
  transaction() {
    return this.hasMany('App/Models/Transaction')
  }
}

module.exports = Actor
