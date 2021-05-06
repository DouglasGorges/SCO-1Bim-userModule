'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
  actor() {
    return this.hasMany('App/Models/Actor')
  }

  transactionItem() {
    return this.belongsTo('App/Models/TransactionItem')
  }
}

module.exports = Transaction
