'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatesSchema extends Schema {
  up() {
    this.create('states', (table) => {
      table.increments()
      table.integer('countryId')
        .unsigned()
        .references('id')
        .inTable('countries')
      table.string('name', 254).notNullable().unique()
      table.string('symbol', 120).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('states')
  }
}

module.exports = StatesSchema
