class User {
    constructor(periodo){
        this.userName
        this.id
        this.name
        this.idade
        this.acadLevel
        this.bio
    }  
    cadastro(userNameInput){
        if (db.includes(userNameInput) === true) {
            console.log('Esse nome de usuário já está me uso')
        }
        else {
            this.userName = userNameInput
        }
        this.id = ~~(Math.random() * 1000000)
        console.log('Novo usuário adicionado.')
    }
}


module.exports = User