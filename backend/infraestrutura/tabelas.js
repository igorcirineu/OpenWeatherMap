class Tabelas {
  init(conexao) {
      this.conexao = conexao

      this.criarInformacoes()
  }

  criarInformacoes() {
      const sql = 'CREATE TABLE IF NOT EXISTS Informacoes ( cidade varchar(50) NOT NULL PRIMARY KEY, pais varchar(50), temperatura varchar(50) NOT NULL, umidade varchar(50) NOT NULL,  clima varchar(20) NOT NULL)'

      this.conexao.query(sql, erro => {
          if(erro) {
              console.log(erro)
          } else {
              console.log('Tabela informacoes criada com sucesso')
          }
      })
  }
}

module.exports = new Tabelas