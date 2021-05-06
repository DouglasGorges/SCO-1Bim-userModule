'use strict'

const TransactionItem = use('App/Models/TransactionItem')

class TransactionItemController {
  async index() {
    const transactionItem = await TransactionItem.all()
    return transactionItem
  }

  async show({ params }) {
    const transactionItem = await TransactionItem.findOrFail(params.id)

    await transactionItem.load('transaction')

    return transactionItem
  }

  async store({ request }) {
    const data = request.only(
      ['transaction_id', 'lot_id', 'unitPrice', 'quantity', 'subTotalPrice']
    )
    const transactionItem = await TransactionItem.create(data)
    return transactionItem
  }

  async update({ params, request }) {
    const transactionItem = await TransactionItem.findOrFail(params.id)
    const data = request.only(
      ['transaction_id', 'lot_id', 'unitPrice', 'quantity', 'subTotalPrice']
    )
    transactionItem.merge(data)
    transactionItem.save()
    return transactionItem
  }

  async destroy({ params, response }) {
    const transactionItem = await TransactionItem.findOrFail(params.id)
    transactionItem.delete()
    return response.status(200).json({
      message: 'Transaction Item deleted'
    })
  }
}

module.exports = TransactionItemController
