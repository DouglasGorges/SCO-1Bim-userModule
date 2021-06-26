'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('cart_id').unsigned().references('id').inTable('carts')
      table.decimal('total', 18, 4)
      table.integer('customer_id').unsigned().references('id').inTable('actors')
      table.string('payment_status').defaultTo('waiting_payment')
      table.string('payment_method').defaultTo('credit_card')
      table.integer('installments').defaultTo(1)
      table.string('shipping_status')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
