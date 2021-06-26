'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartSchema extends Schema {
  up() {
    this.create('carts', (table) => {
      table.increments()
      table.integer('cart_id').unsigned().references('id').inTable('carts').onDelete('NO ACTION')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('NO ACTION')
      table.integer('quantity')
      table.decimal('product_price', 18, 4)
      table.timestamps()
    })
  }

  down() {
    this.drop('carts')
  }
}

module.exports = CartSchema
