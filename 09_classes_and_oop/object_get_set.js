const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

const tea = Object.create(User)
console.log(tea.password);