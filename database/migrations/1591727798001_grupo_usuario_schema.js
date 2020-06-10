'use strict'

const Schema = use('Schema')

class GrupoUsuarioSchema extends Schema {
  up() {
    this.create('grupo_usuarios', (table) => {
      table.increments()
      table.string('nome').notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('grupo_usuarios')
  }
}

module.exports = GrupoUsuarioSchema
