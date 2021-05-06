'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lot extends Model {
  transaction_item() {
    return this.hasOne('App/Models/TransactionItem')
  }

  product() {
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Lot
