'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class State extends Model {
  city() {
    return this.hasMany('App/Models/City')
  }

  country() {
    return this.hasMany('App/Models/Country')
  }
}

module.exports = State
