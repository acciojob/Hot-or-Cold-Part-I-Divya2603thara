//your code here
var btn = document.getElementById("btn")
var ptag = document.getElementById("num")
var inputValue = document.getElementById("guess").value;
var respond = document.getElementById("respond")

function getRandomNumber(){
 random = Math.floor(Math.random() * 40) - 20;
document.getElementById("num").innerText = random;
	guessNum();
	print();
}
function guessNum() {
	input = Number(document.getElementById("guess").value);
}
function print() {
if(Math.abs(random - input) <=5 ){
document.getElementById("respond").innerText="Hot";
}else{
document.getElementById("respond").innerHTML="cold";
}	
	
}

btn.addEventListener("click",getRandomNumber)