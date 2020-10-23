bedroomstatus = "";

function preload() {

loadImage("bedroom.jpg");

}

function setup() {

canvas = createCanvas(600,600);
canvas.center();
document.getElementById("statusbedroom").innerHTML = "Loading Objects";

}

function modelLoaded() {

bedroomstatus = true;
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