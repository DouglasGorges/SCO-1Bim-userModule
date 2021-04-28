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
Route.post('/actor/register', 'ActorController.register').middleware(['auth'])

// Address Routes
Route.post('/address', 'AddressController.register').middleware(['auth'])

// Product Routes
Route.post('/product/register', 'ProductController.register').middleware(['auth'])

// Category Routes
Route.post('/category/register', 'CategoryController.register').middleware(['auth'])

Route.get('/app', 'AppController.index').middleware(['auth'])