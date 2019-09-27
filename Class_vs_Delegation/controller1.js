class Controller {
    constructor(){
        this.errors = [];
    }
    success(){
        alert("Success!");
    }
    failure(message){
        alert("Fail: " + message);
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
            return true;
        } else {
            this.failure ("Wrong username or password!");
            return false;
        }
    }
}

class Auth extends Controller{
    constructor(){
        super();
        this.login = new Login();
    }
    success(){
        alert("Auth!");
    }
    checkAuth(){
        if(this.login.user == "admin") {
            this.success();
            return true;
        } else {
            this.failure("Auth failed!");
            return false;
        }
    }
}

var cont = new Auth();
cont.login.getUser();
cont.login.getPassword();
if(cont.login.validateEntry()){
    cont.checkAuth();
}