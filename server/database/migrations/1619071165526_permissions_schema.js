'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionsSchema extends Schema {
  up() {
    this.create('permissions', (table) => {
      table.increments()
      table.integer('idActor')
        .unsigned()
        .references('id')
        .inTable('actors')
        .unique()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('idComponent').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('permissions')
  }
}

module.exports = PermissionsSchema
