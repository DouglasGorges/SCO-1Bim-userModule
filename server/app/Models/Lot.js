'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lot extends Model {
  transaction_items() {
    return this.hasOne('App/Models/TransactionItems')
  }

  product() {
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Lot
