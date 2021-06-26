'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {
  product() {
    return this.belongsTo('App/Models/Product')
  }

  cart() {
    return this.hasOne('App/Models/Cart')
  }

  carts() {
    return this.hasMany('App/Models/Cart', 'id', 'cart_id')
  }
}

module.exports = Cart
