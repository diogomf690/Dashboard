  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDfYQrSgxmC2YPVkHVl7vKF96brYwJKj9Q",
    authDomain: "pap-12-de1b2.firebaseapp.com",
    projectId: "pap-12-de1b2",
    storageBucket: "pap-12-de1b2.appspot.com",
    messagingSenderId: "574301025540",
    appId: "1:574301025540:web:3a2fb4b9fe1d78fde48c51"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize variaveis
  const auth = firebase.auth()
  const database = firebase.database()

  //coloar users 
function btn_login  (){
    User = document.getElementById('email').value  //estava a pedir plica
    Password = document.getElementById('Password').value //estava a pedir plica
    //informaçao validada 
    if(validade_email(email) == false || validade_Password(Password) == false){
        alert('Email ou a Password eatou incorretos ')
        return
        //para o codigo e volta para o inicio 
    }

    //registar os users 
    auth.createUserWithEmailAndPassoword(email, Password)
    .then(function(){
        //o user e e para a linha 42
        var user  = auth.correntUser         // nao sei se o user e User ou user 
        // dar add do user a farebase 
        var database_ref = database.ref()

        // armazem dos users 
        var user_data = {
            email : email,
            last_login : Date.now()
        }
        
        database_ref.child ('users/' + user.uid).set(user_data)
        
        
        alert('Usuario criado ')
    })
    .catch(function(error){
        //fire base vai usar isto pra menssagem de erros 
        var error_code = error_code
        var error_message = error_message

        alert(error_message)
    })
}
function validade_email (email){
    Expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (Expression.test(email) == true){
        //email esta valido 
        return true
    }else{
        //email invalido    
        return false
    }
}
function validade_Password(Password){
    // passe so com 6 digitos 
    if(Password < 6 ){
        return false
    }else{
        return true
    }
}
function validade_feild(feild){
    if(feild == null){
        return false
    }

    if(feild.length <= 0){
          return false
        } else {
         return true
    }
}