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
   games.style.backgroundColor = "#06fa8a";
   games.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.2)";
   games.style.color = "white";
});

gamesMenu.addEventListener("mouseleave", function () {
   games.style.transform = "scale(1.00)";
   games.style.backgroundColor = "rgba(65, 65, 65, 0.01)";
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

function startProgressAnimation() {
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");
    let textSpin =document.getElementById("textSpin");
    textSpin.innerHTML = "Next spin in";

    let progressEndValue = 100;
    let totalDuration = 25000; // Total duration in milliseconds
    let steps = 1000; // Number of steps
    
    let interval = totalDuration / steps;

    let progressValue = 0;
    let elapsedTime = 0;
    let isTimerZero = false;

    function animateProgress() {
        let animationInterval = setInterval(() => {
            progressValue += 0.1;

            // Calculate remaining time in seconds and update valueContainer
            let remainingSeconds = Math.round((totalDuration - elapsedTime) / 1000);
            if (remainingSeconds > -0.2) {
                valueContainer.textContent = `${remainingSeconds}s`;
            } else {
                if (!isTimerZero) {
                    textSpin.innerHTML = "Spinning";
                    valueContainer.textContent = ``; // Clear the content if remainingSeconds is 0 for the first time
                    isTimerZero = true; // Update the flag
                }
            }
            

            progressBar.style.background = `conic-gradient(
                #575757 ${progressValue * (360 / progressEndValue)}deg,
                #fd2ebc ${progressValue * (360 / progressEndValue)}deg
            )`;

            if (Math.abs(progressValue - progressEndValue) < 0.001) {
                root.style.setProperty('--deg', '2080deg');
                root.style.setProperty('--deg2','-1820deg');
                rouletteWheel.style.animationName = "spin";
                rouletteWheel2.style.animationName = "spinInner";
                
                setTimeout(() => {
                    rouletteWheel.style.animationName = "";
                    rouletteWheel2.style.animationName = "";
                    totalDuration = 0;
                    steps = 0;
                    progressValue = 0;
                    restartProgressAnimation();
                }, 15000);
            }
            elapsedTime += interval;
        }, interval);
    }

    animateProgress();
}

function restartProgressAnimation() {
    // Reset progressValue and elapsedTime
    progressValue = 0;
    elapsedTime = 0;
    // Call startProgressAnimation again
    startProgressAnimation();
}

startProgressAnimation();

let betInputBox = document.getElementById("betInputBox");
let betSelectBox = document.getElementById("betSelectBox");

