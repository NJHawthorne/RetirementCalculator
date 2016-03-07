var currentAge = parseFloat(prompt("How old are you now?"));
var retireAge = parseFloat(prompt("At what age would you like to retire?"));
var date = new Date();
if(currentAge >= retireAge){
	console.log("You're old. Retire already. Go yell at children on your lawn, play bingo, or watch reruns of movies in black and white. Whatever floats your boat.");
}
else {
	console.log("You have "+(retireAge-currentAge)+" years left until you can retire.");
	console.log("It's "+date.getUTCFullYear()+", so you can retire in "+((date.getUTCFullYear())+(retireAge-currentAge))+".");
}