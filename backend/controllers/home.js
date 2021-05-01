const PostHome = require('../models/home')

module.exports = app => { 
  app.get('/', (req, res) => res.send('Servidor rodando, tudo ok!!'))

  app.post('/', (req, res) => { 
    const home = req.body

    PostHome.adiciona(home)
    res.send('Post Home')
  })
  
}
