var song1 = "";
var song2 = "";
var right_wristY = "";
var right_wristX = ""
var left_wristY = "";
var left_wristX = "";
var status = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(480, 480);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(camera, 0, 0, 480, 480);
    fill("teal");
    stroke("crimson");
    song1.isPlaying();
    if (left_wristY > 0.2)
    {
        circle(left_wristX, left_wristY, 150);
         song2.stopPlaying();
        if(song1 = false)
        {
            song1.isPlaying();
            document.getElementById("song_name").innerHTML;
        }
    }

    if (right_wristY > 0.2)
    {
        circle(right_wristX, right_wristY, 150);
         song1.stopPlaying();
        if(song2 = false)
        {
            song2.isPlaying();
            document.getElementById("song_name").innerHTML = "";
        }
    }
}
function modelLoaded() {
    console.log("poseNet is initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        right_wristY = results[0].pose.rightWrist.y;
        console.log("right_wristY = " + right_wristY);
        left_wristY = results[0].pose.leftWrist.y;
        console.log("left_wristY = " + left_wristY);
        right_wristX = results[0].pose.rightWrist.x;
        console.log("right_wristX = " + right_wristX);
        left_wristX = results[0].pose.leftWrist.x;
        console.log("left_wristX = " + left_wristX);
    }
}
