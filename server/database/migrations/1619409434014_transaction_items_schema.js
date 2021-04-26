'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionItemsSchema extends Schema {
  up() {
    this.create('transaction_items', (table) => {
      table.increments()
      table.integer('transactionId').unsigned().references('id').inTable('transaction')
      table.integer('lotId').unsigned().references('id').inTable('lot')
      table.integer('unitPrice').notNullable()
      table.integer('quantity').notNullable()
      table.integer('subTotalPrice').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('transaction_items')
  }
}

module.exports = TransactionItemsSchema
