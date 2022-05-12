var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+ randomNumber1+".png";
var randomimgsource="images/"+ randomImage;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomimgsource);

 /*var randomNumber2=Math.floor(Math.random)*6+1;
 var randomimgsource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("imag")[1];
image2.setAttribute("src",randomimgsource2);*/


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+ randomNumber2+".png";
var randomimgsource2="images/"+ randomImage2;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomimgsource2);

 if(randomNumber1>randomNumber2)
 {
     document.querySelector("h1").innerHTML="WIN PLAYER-1";
 }
 else if (randomNumber2>randomNumber1)
 {
     document.querySelector("h1").innerHTML="WIN PLAYER-2"
 }
 else{
     document.querySelector("h1"),innerHTML="DRAW!"
 }