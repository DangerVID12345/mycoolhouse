livingstatus = "";

function preload() {

loadImage("living room.jpg");

}

function setup() {

canvas = createCanvas(600,600);
canvas.center();
document.getElementById("statusliving").innerHTML = "Loading Objects";

}

function modelLoaded() {

livingstatus = true;
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