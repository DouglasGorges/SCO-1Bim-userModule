'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionsSchema extends Schema {
  up() {
    this.create('permissions', (table) => {
      table.increments()
      table.integer('id')
        .unsigned()
        .references('id')
        .inTable('actor')
        .unique()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('component_id').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('permissions')
  }
}

module.exports = PermissionsSchema
