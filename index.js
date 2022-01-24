const express = require('express');
const app = express();
const routes = require('./app/src/app')




// Rotas
app.use('/', routes)



// Outros
const PORT = 8080
routes.listen(PORT, ()=>{
    console.log('The server is working on ' + PORT)
})

