'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.integer('manufacturerId').unsigned().references('id').inTable('actor')
      table.string('name', 256).notNullable()
      table.string('label', 32).notNullable()
      table.string('ean', 13).notNullable()
      table.integer('retailPrice').notNullable()
      table.integer('measurementUnitId').unsigned().references('id').inTable('measurementUnits')
      table.integer('categoryId').unsigned().references('id').inTable('category')
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductsSchema
