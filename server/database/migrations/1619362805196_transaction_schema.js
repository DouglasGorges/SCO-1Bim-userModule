'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up() {
    this.create('transactions', (table) => {
      table.increments()
      table.integer('establishmentInId').unsigned().references('id').inTable('actor')
      table.integer('establishmentOutId').unsigned().references('id').inTable('actor')
      table.integer('transactionType').notNullable()
      table.integer('employeeId').unsigned().references('id').inTable('actor')
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
