
function Controller(){
    this.errors = [];
}
Controller.prototype.success = function(){
    alert("Success!");
}

Controller.prototype.failure = function(message){
    alert("Fail: " + message);
}

var Login = new Controller();

Login.getUser = function(){
    this.user = prompt("USER: ");
}
Login.getPassword = function(){
    this.password = prompt("PASSWORD: ");
}
Login.validateEntry = function(){
    if(this.user == this.password) {
        Controller.prototype.success();
        return true;
    } else {
        this.failure ("Wrong username or password!");
        return false;
    }
}

var Auth = new Controller();

Auth.login = Object.create(Login);
Auth.success = function(){
    alert("Auth!");
}
Auth.checkAuth = function(){
    if(this.login.user == "admin") {
        this.success();
        return true;
    } else {
        this.failure("Auth failed!");
        return false;
    }
}

var cont = Object.create(Auth);
cont.login.getUser();
cont.login.getPassword();
if(cont.login.validateEntry()){
    cont.checkAuth();
}