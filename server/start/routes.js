'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Actor Routes
Route.post('/actor/authenticate', 'AuthController.authenticate')
Route.resource('actor', 'ActorController').apiOnly()//.middleware(['auth'])
Route.get('/actor/find/:email', 'ActorController.findByEmail')//.middleware(['auth'])
Route.get('/actor/type/:type', 'ActorController.findByPersonType')//.middleware(['auth'])

// Address Routes
Route.post('/address', 'AddressController.register')//.middleware(['auth'])
Route.get('/states', 'AddressController.findStates')//.middleware(['auth'])
Route.get('/cities', 'AddressController.findCities')//.middleware(['auth'])
Route.get('/states/cities/:id', 'AddressController.findCitiesByState')//.middleware(['auth'])

// Product Routes
Route.resource('product', 'ProductController').apiOnly()//.middleware(['auth'])

// Category Routes
Route.resource('category', 'CategoryController').apiOnly()//.middleware(['auth'])

// Transaction Routes
Route.resource('transaction', 'TransactionController').apiOnly()//.middleware(['auth'])

// Transaction Item Routes
Route.resource('transactionItem', 'TransactionItemController').apiOnly()//.middleware(['auth'])

// Lot Routes
Route.resource('lot', 'LotController').apiOnly()//.middleware(['auth'])

// Measurement Unit Routes
Route.resource('measurement', 'MeasurementUnitController').apiOnly()//.middleware(['auth'])