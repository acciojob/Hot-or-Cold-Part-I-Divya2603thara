//your code here
var btn = document.getElementById("btn")
var ptag = document.getElementById("num")
var input = document.getElementById("guess").value;
var respond = document.getElementById("respond")

var diff = Number(input) - Number(ptag.value);
if(Math.abs(diff) <=5 ){
respond.textContent="Hot"
}else{
  respond.textContent="Cold"
}



function getRandomNumber(){
var number = Math.floor(Math.random() * 40) - 20;
ptag.textContent = number

}
btn.addEventListener("click",getRandomNumber)