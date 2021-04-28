'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Actor extends Model {
  city() {
    return this.hasMany('App/Models/City')
  }

  product() {
    return this.hasOne('App/Models/Product')
  }
}

module.exports = Actor
