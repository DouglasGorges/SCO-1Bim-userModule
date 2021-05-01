'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TransactionItem extends Model {
  transaction() {
    return this.hasMany('App/Models/Transaction')
  }
}

module.exports = TransactionItem
