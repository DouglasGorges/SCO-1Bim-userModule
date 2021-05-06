'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitySchema extends Schema {
  up() {
    this.create('cities', (table) => {
      table.increments()
      table.integer('state_id')
        .unsigned()
        .references('id')
        .inTable('states')
      table.string('name', 254).notNullable().unique()
      table.string('symbol', 120).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('cities')
  }
}

module.exports = CitySchema
