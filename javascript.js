var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".image1").setAttribute("src","dice"+randomNumber1+".png");
document.querySelector(".image2").setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
  document.querySelector("h2").innerHTML="Player 1 Wins🚩";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h2").innerHTML="Player 2 Wins🚩";
}
else {
  document.querySelector("h2").innerHTML="Match Draws";
}
