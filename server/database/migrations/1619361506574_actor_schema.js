'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActorSchema extends Schema {
  up() {
    this.create('actors', (table) => {
      table.increments()
      table.string('name', 256).notNullable()
      table.string('oin', 32).notNullable()
      table.integer('phone', 24).notNullable()
      table.string('address', 256).notNullable()
      table.string('zipCode', 20).notNullable()
      table.integer('cityId').unsigned().references('id').inTable('cities')
      table.string('personType', 64).notNullable()
      table.string('employeeType', 64)
      table.timestamps()
    })
  }

  down() {
    this.drop('actors')
  }
}

module.exports = ActorSchema
