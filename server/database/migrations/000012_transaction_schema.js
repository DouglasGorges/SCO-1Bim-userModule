'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up() {
    this.create('transactions', (table) => {
      table.increments()
      table.integer('establishment_in_id').unsigned().references('id').inTable('actors')
      table.integer('establishment_out_id').unsigned().references('id').inTable('actors')
      table.integer('transactionType').notNullable()
      table.integer('employee_id').unsigned().references('id').inTable('actors')
      table.string('documentType').notNullable()
      table.date('date').notNullable()
      table.integer('totalPrice').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
