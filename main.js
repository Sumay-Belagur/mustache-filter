noseX= 0;
noseY= 0;

function preload() {
mustache= loadImage("https://i.postimg.cc/NMyQ087v/mustache-removebg-preview.png")
}


function setup() {
canvas= createCanvas(300, 300);
canvas.position(540, 250);
video= createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet= ml5.poseNet(video, modeLoaded);
poseNet.on("pose", gotPose)
}

function modeLoaded() {
    console.log("posenet is initialized");
}

function gotPose(result) {
if (result.length > 0) {
    console.log(result);
    noseX= result[0].pose.nose.x;
    noseY= result[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}
}

function draw() {
image(video, 0, 0, 300, 300);
image(mustache, noseX - 53, noseY - 8, 110, 50)
}

function snapshot() {
    save("myPhoto");
}