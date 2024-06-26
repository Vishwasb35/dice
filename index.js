var rand1=Math.floor(Math.random()*6)+1;
var diceimage="dice"+rand1+".png";
var dice="images/"+diceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dice);

var rand2=Math.floor(Math.random()*6)+1;
var dice2="images/dice"+rand2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice2); 

if(rand1>rand2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";                              
}