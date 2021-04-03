import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('firstname').notNullable()
    table.string('lastname').notNullable()
    table.string('document').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.boolean('idActive').notNullable().defaultTo(true)
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}