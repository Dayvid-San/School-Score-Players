const express = require("express");
const route = express.Router()

route.get('/', (req, res)=>{
    res.send('Página do Usuário')
})


route.get('/outro', (req, res)=>{
    res.send('<h2>OK. tutu</h2>')
})




module.exports = route