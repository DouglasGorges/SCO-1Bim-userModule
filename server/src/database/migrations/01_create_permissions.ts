import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('permissions', table => {
    table.increments('idPermission').primary()
    table.integer('idUser')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('idComponent').notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('inactivatedAt').defaultTo(null)
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('permissions')
}