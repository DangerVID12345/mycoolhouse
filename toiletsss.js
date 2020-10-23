bathroomstatus = "";

function preload() {

loadImage("bathroom.jpg");

}

function setup() {

canvas = createCanvas(600,600);
canvas.center();
document.getElementById("statusbathroom").innerHTML = "Loading Objects";

}

function modelLoaded() {

bathroomstatus = true;
cocossd = ml5.cocossd()

}

function gotResults(error, results) {

if(error) {

console.error(error);

}

else() {

console.log(results);

}

console.log(results);

}