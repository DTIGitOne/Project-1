let menu = document.getElementById("menu");
let games = document.getElementById("games");
let gamesMenu = document.getElementById("gamesMenu");
let withdraw = document.getElementById("withdraw");
let deposit = document.getElementById("deposit");

games.addEventListener("mouseover", function () {
   gamesMenu.style.display = "flex";
   gamesMenu.style.animationName = "dropDown2";
   games.style.transform = "scale(1.08)";
});

gamesMenu.addEventListener("mouseover", function () {
   games.style.transform = "scale(1.08)";
   games.style.backgroundColor = "#A6EFC9";
   games.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.2)";
});

gamesMenu.addEventListener("mouseleave", function () {
   games.style.transform = "scale(1.00)";
   games.style.backgroundColor = "#AEFFD3";
   gamesMenu.style.display = "none";
   games.style.boxShadow = "";
});

withdraw.addEventListener("mouseover" , function(){
   gamesMenu.style.display = "none";
});

deposit.addEventListener("mouseover" , function(){
   gamesMenu.style.display = "none";
});
