'use strict'

const City = use('App/Models/City')
const State = use('App/Models/State')
const Country = use('App/Models/Country')

class AddressController {
  async register({ request }) {
    const data = request.only(['cities', 'states', 'countries'])

    const country = await Country.create({
      name: data.countries.name,
      symbol: data.countries.symbol
    })
    const state = await State.create({
      country_id: country.id,
      name: data.states.name,
      symbol: data.states.symbol
    })
    const city = await City.create({
      state_id: state.id,
      name: data.cities.name,
      symbol: data.cities.symbol
    })

    return { country, state, city }
  }
}

module.exports = AddressController
