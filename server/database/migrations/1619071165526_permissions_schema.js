'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionsSchema extends Schema {
  up() {
    this.create('permissions', (table) => {
      table.increments()
      table.integer('idUser')
        .unsigned()
        .references('id')
        .inTable('users')
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
