'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LotSchema extends Schema {
  up() {
    this.create('lots', (table) => {
      table.increments()
      table.integer('productId').unsigned().references('id').inTable('products')
      table.integer('quantityBalance').notNullable()
      table.date('expiryDate').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('lots')
  }
}

module.exports = LotSchema
