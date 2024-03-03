let menu = document.getElementById("menu");
let games = document.getElementById("games");
let gamesMenu = document.getElementById("gamesMenu");
let withdraw = document.getElementById("withdraw");
let deposit = document.getElementById("deposit");
let roulette = document.getElementById("roulette");

let width1 = games.getBoundingClientRect().width;
   roulette.style.width = `${width1}px`;

games.addEventListener("mouseover", function () {
   gamesMenu.style.display = "flex";
   gamesMenu.style.animationName = "dropDown2";
   games.style.transform = "scale(1.05)";
});

gamesMenu.addEventListener("mouseover", function () {
   games.style.transform = "scale(1.05)";
   games.style.backgroundColor = "#A6EFC9";
   games.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.2)";
   games.style.color = "white";
});

gamesMenu.addEventListener("mouseleave", function () {
   games.style.transform = "scale(1.00)";
   games.style.backgroundColor = "#AEFFD3";
   gamesMenu.style.display = "none";
   games.style.boxShadow = "";
   games.style.color = "black";
});

withdraw.addEventListener("mouseover" , function(){
   gamesMenu.style.display = "none";
});

deposit.addEventListener("mouseover" , function(){
   gamesMenu.style.display = "none";
});

let rouletteWheel = document.getElementById("rouletteWheel");
let spinButton = document.getElementById("spinButton");
let root = document.documentElement;
let rouletteWheel2 = document.getElementById("rouletteWheel2");

let size1 = 0;

for (let i = 0; i < 40; i++) {
    let rouletteChild = rouletteWheel.children[i];
    let computedStyle = window.getComputedStyle(rouletteChild);
    if (i >= 1) {
        size1 += 9;
    }
    rouletteChild.style.transform = "rotate(" + size1 + "deg)";
}

for (let i = 0; i < 40; i++) {
    let rouletteChild = rouletteWheel2.children[i];
    let computedStyle = window.getComputedStyle(rouletteChild);
    if (i >= 1) {
        size1 += 9;
    }
    rouletteChild.style.transform = "rotate(" + size1 + "deg)";
}

spinButton.addEventListener("click" , function (){
    root.style.setProperty('--deg', '2080deg');
    root.style.setProperty('--deg2','-1820deg');
    rouletteWheel.style.animationName = "spin";
    rouletteWheel2.style.animationName = "spinInner";

    setTimeout(() => {
        rouletteWheel.style.animationName = "";
        rouletteWheel2.style.animationName = "";
    }, 10000);
});
