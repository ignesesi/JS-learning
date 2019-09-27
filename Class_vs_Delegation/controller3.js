
var Login = {
    errors: [],
    user: undefined,
    password: undefined,
    successLogin(){
        alert("Success!");
    },
    failure(message){
        alert("Fail: " + message);
    },
    getUser(){
        this.user = prompt("USER: ");
    },
    getPassword(){
        this.password = prompt("PASSWORD: ");
    }, 
    validateEntry(){
        if(this.user == this.password) {
            this.successLogin();
            return true;
        }else{
            this.failure ("Wrong username or password!");
            return false;
        }
    }
};

var Auth = {
    successAuth(){
        alert("Auth!");
    },
    checkAuth(){
        if(this.user == "admin") {
            this.successAuth();
            return true;
        } else {
            this.failure("Auth failed!");
            return false;
        }
    }
};

Object.setPrototypeOf(Auth, Login);

var cont = Object.create(Auth);
cont.getUser();
cont.getPassword();
if(cont.validateEntry()){
    cont.checkAuth();
}