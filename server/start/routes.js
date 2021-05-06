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

// User Routes
Route.post('/user/register', 'AuthController.register')
Route.post('/user/authenticate', 'AuthController.authenticate')

// Actor Routes
Route.resource('actor', 'ActorController').apiOnly().middleware(['auth'])

// Address Routes
Route.post('/address', 'AddressController.register').middleware(['auth'])

// Product Routes
Route.resource('product', 'ProductController').apiOnly().middleware(['auth'])

// Category Routes
Route.resource('category', 'CategoryController').apiOnly().middleware(['auth'])

// Transaction Routes
Route.resource('transaction', 'TransactionController').apiOnly().middleware(['auth'])

// Transaction Item Routes
Route.resource('transactionItem', 'TransactionItemController').apiOnly().middleware(['auth'])

// Lot Routes
Route.resource('lot', 'LotController').apiOnly().middleware(['auth'])

// Measurement Unit Routes
Route.resource('measurement', 'MeasurementUnitController').apiOnly().middleware(['auth'])