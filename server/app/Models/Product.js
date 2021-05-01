'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  actor() {
    return this.hasMany('App/Models/Actor')
  }
}

module.exports = Product
