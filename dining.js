diningstatus = "";

function preload() {

loadImage("dining room.jpg");

}

function setup() {

canvas = createCanvas(600,600);
canvas.center();
document.getElementById("statusdining").innerHTML = "Loading Objects";

}

function modelLoaded() {

diningstatus = true;
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