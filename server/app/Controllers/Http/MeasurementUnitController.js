'use strict'

const MeasurementUnit = use('App/Models/MeasurementUnit')

class MeasurementUnitController {
  async index() {
    const measurement = await MeasurementUnit.all()
    return measurement
  }

  async store({ request }) {
    const data = request.only(
      ['entity', 'baseUnit', 'symbol']
    )
    const measurement = await MeasurementUnit.create(data)
    return measurement
  }

  async update({ params, request }) {
    const measurement = await MeasurementUnit.findOrFail(params.id)
    const data = request.only(
      ['entity', 'baseUnit', 'symbol']
    )

    measurement.merge(data)
    measurement.save()
    return measurement
  }

  async destroy({ params, response }) {
    const measurement = await MeasurementUnit.findOrFail(params.id)
    measurement.delete()
    return response.status(200).json({
      message: 'Measurement Unit deleted'
    })
  }
}

module.exports = MeasurementUnitController
