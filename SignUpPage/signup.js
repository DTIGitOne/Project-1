let userName = document.getElementById("userName");
let userNameError = document.getElementById("userNameError");

let signup = document.getElementById("signup");

let userNameRegex = /^[A-z]{1}[a-z]{1,25}$/
let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.?[a-zA-z]+?\.[a-zA-Z]{2,}$/;

signup.addEventListener('mouseover' , function () {
   signup.style.backgroundColor = "#C9BAFF";
}
);

signup.addEventListener('mouseleave' , function () {
   signup.style.backgroundColor = "#DFD6FF";
}
);



signup.addEventListener('click' , function () {

}
);