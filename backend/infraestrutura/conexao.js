const { Pool } = require('pg')

const conexao = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'meteorologia',
  password: '12345678',
  port: 5432,
})

module.exports = conexao