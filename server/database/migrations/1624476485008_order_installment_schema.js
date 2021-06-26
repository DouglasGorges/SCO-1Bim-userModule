'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderInstallmentSchema extends Schema {
  up() {
    this.create('order_installments', (table) => {
      table.increments()
      table.decimal('installment_price', 18, 4)
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.string('payment_status').defaultTo('waiting_payment')
      table.string('payment_method').defaultTo('credit_card')
      table.integer('installment').defaultTo(1)
      table.date('expire_date')
      table.timestamps()
    })
  }

  down() {
    this.drop('order_installments')
  }
}

module.exports = OrderInstallmentSchema
