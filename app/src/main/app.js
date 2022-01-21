const express = require('express');
const app = express();
const admin = require('./routes/admin')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')


// Config
    // Sessão
    app.use(session({
        secret: "FlubyahGSasldsa97h234bhdsgpskd12343",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())

    // Middleware
    app.use((req,res,next)=>{
        res.locals.sucess_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        next()
    })
    
    // Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/schoolscore').then(()=>{
        console.log('Successful connection database')
    }).catch((err)=>{
        console.log('There any problem on connection. Check it! => '+err)
    })

    // EJS
    app.set('view engine', 'ejs')
    app.use(express.static(__dirname + '/public'));

// Rotes
app.use('/user', admin)

app.post('/newuser', (req,res)=>{
// Adiciona novos usuarios
    // Validando inscricao de nova conta
    
})

app.get('/', (req, res)=>{
    res.render('../views//pages/index')
})


// Outros
const PORT = 8080
app.listen(PORT, ()=>{
    console.log('The server is working on ' + PORT)
})