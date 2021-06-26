'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeasurementUnitsSchema extends Schema {
  up() {
    this.create('measurement_units', (table) => {
      table.increments()
      table.string('entity', 256).notNullable()
      table.string('baseUnit', 256).notNullable()
      table.string('symbol', 16).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('measurement_units')
  }
}

module.exports = MeasurementUnitsSchema
