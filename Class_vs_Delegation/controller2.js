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
            super.success();
            return true;
        } else {
            this.failure ("Wrong username or password!");
            return false;
        }
    }
}

class Auth extends Login{
    constructor(){
        super();
    }
    success(){
        alert("Auth!");
    }
    checkAuth(){
        if(this.user == "admin") {
            this.success();
            return true;
        } else {
            this.failure("Auth failed!");
            return false;
        }
    }
}

var cont = new Auth();
cont.getUser();
cont.getPassword();
if(cont.validateEntry()){
    cont.checkAuth();
}