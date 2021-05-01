'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
  actor() {
    return this.hasMany('App/Models/Actor')
  }

  transaction_items() {
    return this.belongsTo('App/Models/TransactionItems')
  }
}

module.exports = Transaction
