'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionItemsSchema extends Schema {
  up() {
    this.create('transaction_items', (table) => {
      table.increments()
      table.integer('transaction_id').unsigned().references('id').inTable('transactions')
      table.integer('lot_id').unsigned().references('id').inTable('lots')
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
