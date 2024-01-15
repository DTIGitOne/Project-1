let verifySelect = document.getElementById("verifySelect");
let dropdownIcon = document.getElementById("dropdownIcon");
let verificationDiv = document.getElementById("verificationDiv");
let VerifyBox = document.getElementById("VerifyBox");
let verifyInput = document.getElementById("verifyInput");
let goBackEmail = document.getElementById("goBackEmail");
let verifyError = document.getElementById("verifyError");
let signUpInput = document.getElementById("signUpInput");
let password = document.getElementById("password");
let showPassword = document.getElementById("showPassword");
let showPasswordBox = document.getElementById("showPasswordBox");

signUpInput.addEventListener('mouseover' , function() {
   signUpInput.style.backgroundColor = "#C9BAFF"
});

signUpInput.addEventListener('mouseleave' , function() {
   signUpInput.style.backgroundColor = "#DFD6FF"
});

password.addEventListener("input" , function() {
   
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

verificationDiv.addEventListener('click' , function() {
   verifyInput.innerHTML = "";
   let dropdownSelect = document.createElement("div");
   dropdownSelect.className = "dropdownSelect";
   verificationDiv.append(dropdownSelect);

   let row1 = document.createElement("div");
   row1.className = "row1";
   row1.innerHTML = "email verification";
   dropdownSelect.append(row1);

   let row2 = document.createElement("div");
   row2.className = "row2";
   row2.innerHTML = "birthyear verification";
   dropdownSelect.append(row2);

   row1.addEventListener("mouseover" , function() {
      row1.style.backgroundColor = "#BFFFDB";
   });
   row1.addEventListener("mouseleave" , function() {
      row1.style.backgroundColor = "#E5FFF1";
   });

   row2.addEventListener("mouseover" , function() {
      row2.style.backgroundColor = "#BFFFDB";
   });
   row2.addEventListener("mouseleave" , function() {
      row2.style.backgroundColor = "#E5FFF1";
   });

   row1.addEventListener("click" , function() {
      verificationDiv.remove();
       
      let sendEmailButton = document.createElement('button');
      sendEmailButton.innerHTML = "Send email verification";
      sendEmailButton.className = "infoBoxForEmail";
      VerifyBox.prepend(sendEmailButton);
      
      verifyInput.innerHTML = "";
      verifyInput.className = "infoBox1";
      verifyInput.style.marginTop = "11px";
      verifyInput.style.visibility = "visible";
      verifyInput.type = "text";
      
      let goBackButton = document.createElement("div");
      goBackButton.innerHTML = "go back";
      goBackButton.className = "goBackButton";
      verifyError.append(goBackButton);
      
      sendEmailButton.addEventListener('mouseover' , function() {
         sendEmailButton.style.backgroundColor = "#C9BAFF";
      });

      sendEmailButton.addEventListener('mouseleave' , function() {
         sendEmailButton.style.backgroundColor = "#DFD6FF";
      });

      goBackButton.addEventListener('click' , function(){
         sendEmailButton.remove();
         verifyInput.style.visibility = "hidden";
         goBackButton.remove();
         
         verifySelect.innerHTML = "Select a verification method";
         VerifyBox.prepend(verificationDiv);
       
      });
   });

   row2.addEventListener("click" , function() {
   
         verificationDiv.remove();
       
      setTimeout(function() {
         VerifyBox.prepend(verificationDiv);
       }, 10);
       
      verifySelect.innerHTML = "birthyear verification";
      verifyInput.type = "date";
      verifyInput.innerHTML = "";
      verifyInput.className = "infoBox5";
      verifyInput.style.visibility = "visible";
      verifyInput.style.marginTop = "25px";
      
   });


   verificationDiv.addEventListener("mouseleave" , function() {
      dropdownSelect.remove();
   });
   
});

let usernameEmailEnter = document.getElementById("usernameEmailEnter");
let signupError = document.getElementById("signupError");

signUpInput.addEventListener('click' , function() {

   
});
