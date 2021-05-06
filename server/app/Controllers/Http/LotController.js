'use strict'

const Lot = use('App/Models/Lot')

class LotController {
  async index() {
    const lot = await Lot.all()
    return lot
  }

  async show({ params }) {
    const lot = await Lot.findOrFail(params.id)
    await lot.load('transaction_item')

    return lot
  }

  async store({ request }) {
    const data = request.only(
      ['product_id', 'quantityBalance', 'expiryDate']
    )
    const lot = await Lot.create(data)
    return lot
  }

  async update({ params, request }) {
    const lot = await Lot.findOrFail(params.id)
    const data = request.only(
      ['product_id', 'quantityBalance', 'expiryDate']
    )

    lot.merge(data)
    lot.save()
    return lot
  }

  async destroy({ params, response }) {
    const lot = await Lot.findOrFail(params.id)
    lot.delete()

    return response.status(200).json({
      message: 'Lot deleted'
    })
  }
}

module.exports = LotController
