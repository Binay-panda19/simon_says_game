let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];
let level=0;
let started=false;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
    console.log("game is started");
    started=true;
    levelup();
    }
})

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`; 
    
    // random button selected
    let ranidx=Math.floor(Math.random()*4); 
    let rancolor= btns[ranidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    console.log(gameSeq);
    gameflash(ranbtn);
}

function checkans(idx){
    if (userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }


}
function btnpress(){
    let btn=this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".boxes");

for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}















































// let gameSeq = [];
// let userSeq = [];
// let btns = ["yellow", "red", "green", "purple"];
// let level = 0;
// let started = false;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if (started === false) {
//         console.log("game is started");
//         started = true;
//         levelup();
//     }
// });

// function btnflash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function levelup() {
//     level++;
//     h2.innerText = `Level ${level}`; 

//     // Random button selected
//     let ranidx = Math.floor(Math.random() * 4); //index range
//     let rancolor = btns[ranidx];
//     let ranbtn = document.querySelector(`.${rancolor}`); 
//     console.log(ranidx);
//     console.log(ranbtn);
//     console.log(rancolor);
//     btnflash(ranbtn);
// }