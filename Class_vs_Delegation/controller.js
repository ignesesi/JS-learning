class Controller {
    constructor(){
        this.errors = [];
    }
    showDialog(){

    }
    success(){
        alert("Success!");
    }
    failure(message){
        alert("Fail: ", message);
    }
}

class Login extends Controller{
    constructor(){
        super();
    }
    getUser(){
        this.user = prompt("USER: ");
    }
    getPassword(){
        this.password = prompt("PASSWORD: ");
    }
    validateEntry(){
        if(this.user == this.password) {
            this.success();
        } else {
            this.failure ("Wrong username or password!");
        }
    }
}

class Auth extends Controller{
    constructor(){
        super();
        this.login = new Login();
    }
    server(){

    }
    success(){
        alert("Auth!");
    }
    checkAuth(){
        if(this.login.user == "admin") {
            this.success();
        } else {
            this.failure("Auth failed!");
        }
    }
}

var cont = new Auth();