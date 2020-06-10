'use strict'

const GrupoUsuario = use('App/models/GrupoUsuario')

class GrupoUsuarioController {
  async index({ request, response, view }) {
    const GrupoUsuarios = await GrupoUsuario.all()
    return GrupoUsuarios
  }

  async store({ request, response }) {
    const data = request.only(['nome'])

    const grupoUsuario = await GrupoUsuario.create(data)

    return grupoUsuario
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = GrupoUsuarioController
