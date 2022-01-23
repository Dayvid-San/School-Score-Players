const User = require('./classUsuario')

class CategoryUser extends User{
    constructor(){
        super()
        this.score
        this.peso =  this.#peso(this.acadLevel)
        const soluta = this.score / this.peso
        this.#definirHank(soluta)
        //console.log(`Faltam ${distancia} para chegar no proxímo nível`)
    }

    #peso(periodo){
        if (periodo === 'ef'){
            this.peso = 1
        }
        else if (periodo === 'gn'){
            this.peso = 2
        }
        else if (periodo === 'em'){
            this.peso = 7
        }
        else if (periodo === 'es'){
            this.peso = 12
        }
        else if (periodo === 'mt'){
            this.peso = 18
        }
    }
    
    #definirHank(soluta){
        
        if ( soluta <= 40){
            this.nivel
            return this.hank = 'Lixo'
        }
        else if (soluta <= 80){
            this.nivel
            return this.hank = 'Guerreiro'
        }
        else if (soluta <= 110){
            this.nivel
            return this.hank = 'Soldado'
        }
        else if (soluta <= 170){
            this.nivel
            return this.hank = 'Elite'
        }
        else if (soluta <= 230){
            this.nivel
            return this.hank = 'Mestre'
        }
        else if (soluta <= 300){
            this.nivel
            return this.hank = 'Heroi'
        }
        else if (soluta <= 490){
            this.nivel
            return this.hank = 'Lenda'
        }
        else if (soluta <= 580){
            this.nivel
            return this.hank = 'Mítico'
        }
        else {
            this.nivel 
            return this.hank = 'Celeste'
        }
    }
}
