'use strict'

const Transaction = use('App/Models/Transaction')

class TransactionController {
  async index() {
    const transaction = await Transaction.all()
    return transaction
  }

  async show({ params }) {
    const transaction = await Transaction.findOrFail(params.id)

    await transaction.load('transactionItem')

    return transaction
  }

  async store({ request }) {
    const data = request.only(
      ['establishment_in_id', 'establishment_out_id', 'transactionType', 'employee_id', 'documentType', 'date', 'totalPrice']
    )
    const transaction = await Transaction.create(data)
    return transaction
  }

  async update({ params, request }) {
    const transaction = await Transaction.findOrFail(params.id)
    const data = request.only(
      ['establishment_in_id', 'establishment_out_id', 'transactionType', 'employee_id', 'documentType', 'date', 'totalPrice']
    )
    transaction.merge(data)
    transaction.save()
    return transaction
  }

  async destroy({ params, response }) {
    const transaction = await Transaction.findOrFail(params.id)
    transaction.delete()

    return response.status(200).json({
      message: 'Transaction deleted'
    })
  }
}

module.exports = TransactionController
