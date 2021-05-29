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
      table.string('personType', 64).notNullable()
      table.string('employeeType', 64)
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.integer('inactivatedBy').unsigned().references('id').inTable('actors')
      table.timestamps()
      table.integer('createdBy').unsigned().references('id').inTable('actors')
      table.timestamps()
      table.timestamps()
    })
  }

  down() {
    this.drop('actors')
  }
}

module.exports = ActorSchema