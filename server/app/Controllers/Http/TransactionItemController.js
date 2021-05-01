'use strict'

const TransactionItem = use('App/Models/TransactionItem')

class TransactionItemController {
  async index() {
    const transactionItem = await TransactionItem.all()
    return transactionItem
  }

  async store({ request }) {
    const data = request.only(
      ['transactionId', 'lotId', 'unitPrice', 'quantity', 'subTotalPrice']
    )
    const transactionItem = await TransactionItem.create(data)
    return transactionItem
  }

  async update({ params, request }) {
    const transactionItem = await TransactionItem.findOrFail(params.id)
    const data = request.only(
      ['transactionId', 'lotId', 'unitPrice', 'quantity', 'subTotalPrice']
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
