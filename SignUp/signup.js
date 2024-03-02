
let userName = document.getElementById("userName");
let userNameError = document.getElementById("userNameError");

let signup = document.getElementById("signup");

let userNameRegex = /^[a-zA-z0-9_.-]{1}[a-zA-z0-9_.-]{1,25}$/
let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.?[a-zA-z]+?\.[a-zA-Z]{1,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\];:'",.<>?\\d]).{6,30}$/;
let birthdateRegex = /^[1-2][9,8,0][0-9][0-9]-[0-1][0-9]-[0-9]{2}$/;
let specialRegex = /[!@#$%^&*()_+{}\[\];:'",.<>?\\]/;

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
let birthdateError = document.getElementById("birthdateError");

let showPasswordBox = document.getElementById("showPasswordBox");
let showPassword = document.getElementById("showPassword");
let showPasswordBox2 = document.getElementById("showPasswordBox2");
let showPassword2 = document.getElementById("showPassword2");
let psswordError = document.getElementById ("passwordError");

userName.addEventListener('input' , function() {

   userNameError.className = "errorBox1";
   userNameError.innerHTML = "";

   if (userName.value.length === 25) {
      userNameError.innerHTML = "username can only be 25 characters long";
   } else if (userName.value.length < 25) {
      userNameError.innerHTML = "";
   }
   
});

password.addEventListener("input" , function() {
   
   if (password.value.length === 30) {
      passwordError.innerHTML = "Password can only be 30 characters long";
   } else if (password.value.length < 30) {
      passwordError.innerHTML = "";
   }
   

   if (password.value !== "") {
      showPassword.className = "checkbox2";
   } else if (password.value === "") {
      showPassword.className = "checkbox";
   }
 

   showPassword.addEventListener('mouseover', function() {
      showPasswordBox.style.display = "inline";
   }
   );
   showPassword.addEventListener('mouseleave', function() {
      showPasswordBox.style.display = "none";
   }
   );

}
);

showPassword.addEventListener('click' , function(){
   if (showPassword.checked === true) {
      password.type = "text";
   } else if (showPassword.checked === false) {
      password.type = "password";
   }
}
);


repeatPassword.addEventListener("input" , function() {
   

   if (repeatPassword.value !== "") {
      showPassword2.className = "checkbox2";
   } else if (repeatPassword.value === "") {
      showPassword2.className = "checkbox";
   }
      
   repeatPasswordError.innerHTML = "";

   showPassword2.addEventListener('mouseover', function() {
      showPasswordBox2.style.display = "inline";
   }
   );
   showPassword2.addEventListener('mouseleave', function() {
      showPasswordBox2.style.display = "none";
   }
   );
}
);

showPassword2.addEventListener('click' , function(){
   if (showPassword2.checked === true) {
      repeatPassword.type = "text";
   } else if (showPassword2.checked === false) {
      repeatPassword.type = "password";
   }
}
);


signup.addEventListener('click' , function() {
   
   userNameError.className = "errorBox1";
   userNameError.innerHTML = "";

   if ( userName.value && email.value && password.value && repeatPassword.value && birthdate.value === "") {

      signupError.innerHTML = "Please fill in all the data";
      
      userName.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
         repeatPasswordError.innerHTML = "";
      });
      email.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
         repeatPasswordError.innerHTML = "";
      });
      password.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
         repeatPasswordError.innerHTML = "";
      });
      repeatPassword.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
         repeatPasswordError.innerHTML = "";
      });
      birthdate.addEventListener('input' , function(){
         signupError.innerHTML = "";
         userNameError.innerHTML = "";
         birthdateError.innerHTML = "";
         repeatPasswordError.innerHTML = "";
      });

   } else {

      if (userName.value.match(userNameRegex)) {
         
         userNameError.innerHTML = "";

         if (email.value.match(emailRegex)) {
           
            emailError.innerHTML = "";
            
            if (password.value.match(passwordRegex) && password.value.match(specialRegex)) {
               
               passwordError.innerHTML = "";

               if (repeatPassword.value === password.value) {
                    
                  repeatPasswordError.innerHTML = "";
                  

                  if (birthdate.value.match(birthdateRegex)) {
                     
                     
                     let year1 = birthdate.value.slice(0,4);

                     let year1Number = parseInt(year1);
                     
                     if (year1Number > 2004) {
                        birthdateError.innerHTML = "please select a legal age";
                     } else {
                        if (year1Number >= 1930) {
                           birthdateError.innerHTML = "";
                           
                           let dateStringRemove = birthdate.value.replace(/-/g, '');
                           let dateFull = parseInt(dateStringRemove);
                           
                           let info = {
                              name : userName.value,
                              mail : email.value,
                              password1 : password.value,
                              date1 : dateFull,
                           };

                           

                           signUpValidate(info);
   
                        } else {
                           birthdateError.innerHTML = "the minimum age is 1930";
                        }
                     }

                  } else {
                     birthdateError.innerHTML = "please set a realistic date"
                  }

               } else {

                 let repeatPasswordError = document.getElementById("repeatPasswordError");
                 
                 repeatPasswordError.innerHTML = "please try again";

               }

            } else {
               if (password.value.length < 6 ) {
                  passwordError.innerHTML = "password must at least contain 6 characters";
               } else if (!password.value.match(passwordRegex)) {
                  passwordError.innerHTML = "please add one special and uppercase character";
               } else if (!password.value.match(specialRegex)) {
                  passwordError.innerHTML = "please add one special and uppercase character";
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

});