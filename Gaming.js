gamingstatus = "";

function preload() {

loadImage("gaming room.jpg");

}

function setup() {

canvas = createCanvas(600,600);
canvas.center();
document.getElementById("statusgaming").innerHTML = "Loading Objects";

}

function modelLoaded() {

gamingstatus = true;
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