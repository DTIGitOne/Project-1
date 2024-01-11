let userName = document.getElementById("userName");
let userNameError = document.getElementById("userNameError");

let signup = document.getElementById("signup");

let userNameRegex = /^[A-z]{1}[a-z]{1,25}$/
let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.?[a-zA-z]+?\.[a-zA-Z]{2,}$/;
let passwordRegex = /[a-zA-Z0-9!@#$%^&*()-_=+{}|[\];:'",.<>?\\]{6,30}/;

signup.addEventListener('mouseover' , function () {
   signup.style.backgroundColor = "#C9BAFF";
}
);

signup.addEventListener('mouseleave' , function () {
   signup.style.backgroundColor = "#DFD6FF";
}
);

let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeatPassword");
let birthdate = document.getElementById("birthdate");
let signupError = document.getElementById("signupError");


signup.addEventListener('click' , function() {
        
   if ( userName.value , email.value , password.value , repeatPassword.value , birthdate.value === "") {

      signupError.innerHTML = "Please fill in all the data";
      
      userName.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
      });
      email.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
      });
      password.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
      });
      repeatPassword.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
      });
      birthdate.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
      });

   } else {

      if (userName.value.match(userNameRegex)) {
         
         userNameError.innerHTML = "";

         if (email.value.match(emailRegex)) {
           
            emailError.innerHTML = "";
            
            if (password.value.match(passwordRegex) && password.value.length <= 30) {
               
               passwordError.innerHTML = "";

               if (repeatPassword.value === password.value) {
                    
                  repeatPasswordError.innerHTML = "";

               } else {

                 let repeatPasswordError = document.getElementById("repeatPasswordError");

                 repeatPasswordError.innerHTML = "please try again";
               }

            } else {
               
               let passwordError = document.getElementById ("passwordError");

               if (password.value.length > 30 ) {
                  passwordError.innerHTML = "password can be 30 characters long";
               } else if (password.value.length < 6) {
                  passwordError.innerHTML = "password must at least contain 6 characters";
               }
            }

         } else {

            let emailError = document.getElementById("emailError");

            if (email.value.length === 1 ) {
               emailError.innerHTML = "email cant have one character";
            } else {
               emailError.innerHTML = "incorrect email format";
            }

         }

      } else {

         let userNameError = document.getElementById("userNameError");
         
         if (userName.value.length === 1) {
            userNameError.innerHTML = "username must have at least 2 characters";
         } else if (userName.value.length > 25) {
            userNameError.innerHTML = "username containes more than 25 characters";
         } else {
            userNameError.innerHTML = "wrong username input";
         }
         
      }
   }






   let info = {
      name : userName.value,
      mail : email.value,
      password1 : password,
      password2 : repeatPassword,
      date1 : birthdate,
   };
   
});