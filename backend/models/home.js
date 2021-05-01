const conexao = require('../infraestrutura/conexao')

class Home {
    adiciona(informacoes) {
        const sql = 'INSERT INTO informacoes SET ?'
        console.log(informacoes);
        conexao.query(sql, informacoes, (erro, resultados) => {
            if(erro) {
                console.log(erro)
                
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Home