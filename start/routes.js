'use strict'

const Route = use('Route')

Route.post('users', 'UsersController.store')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('grupousuarios', 'GrupoUsuarioController').apiOnly()
}).middleware(['auth'])
