const express = require('express');
const app = express();
const mongoose = require('mongoose')
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

    // CSS
    app.use(express.static(__dirname + '/public'))

    // EJS
    app.use(express.static(__dirname + 'src/views'))
    app.set('view engine', 'ejs')
    
// Rotes
app.get('/', (req, res)=>{
    res.render('../views/pages/index')
})
app.get('/cadastro',(req,res)=>{
    res.render('../views/pages/sigin')
})
app.post('/newuser', (req,res)=>{
    // Adiciona novos usuarios
    // Validando inscricao de nova conta
    
})

// A preferencia é que o login sejá feito por um popup
app.get('/login',(req,res)=>{
    res.render('../views/pages/login')
})



// Outros
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('The server is working on ' + port)
})


module.exports = app