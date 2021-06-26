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
Route.resource('actor', 'ActorController').apiOnly()
Route.get('/actor/find/:email', 'ActorController.findByEmail')
Route.get('/actor/type/:type', 'ActorController.findByPersonType')

// Address Routes
Route.post('/address', 'AddressController.register')
Route.get('/states', 'AddressController.findStates')
Route.get('/cities', 'AddressController.findCities')
Route.get('/states/cities/:id', 'AddressController.findCitiesByState')

// Product Routes
Route.resource('product', 'ProductController').apiOnly()

// Category Routes
Route.resource('category', 'CategoryController').apiOnly()

// Transaction Routes
Route.resource('transaction', 'TransactionController').apiOnly()

// Transaction Item Routes
Route.resource('transactionItem', 'TransactionItemController').apiOnly()

// Lot Routes
Route.resource('lot', 'LotController').apiOnly()

// Measurement Unit Routes
Route.resource('measurement', 'MeasurementUnitController').apiOnly()

// Cart Routes
Route.post('/cart/remove-item', 'CartController.destroy')
Route.resource('cart', 'CartController').apiOnly()

// Orders Routes
Route.resource('order', 'OrderController').apiOnly()
