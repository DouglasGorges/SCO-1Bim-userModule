'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  customer() {
    return this.belongsTo('App/Models/Actor', 'customer_id')
  }

  cart() {
    return this.belongsTo('App/Models/Cart')
  }

  installments() {
    return this.hasMany('App/Models/OrderInstallment', 'id', 'order_id')
  }
}

module.exports = Order
