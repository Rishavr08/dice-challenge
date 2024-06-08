var randomNumber1=Math.floor(Math.random()*6+1);
var imag1="dice"+randomNumber1+".png";
var imag2="images/"+imag1;
var randomNumbergenerator=document.querySelectorAll("img")[0];
randomNumbergenerator.setAttribute("src",imag2);

var randomNumber2=Math.floor(Math.random()*6+1);
var img1="dice"+randomNumber2+".png";
var img2="images/"+img1;
var randomNumbergenerator=document.querySelectorAll("img")[1];
randomNumbergenerator.setAttribute("src",img2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
