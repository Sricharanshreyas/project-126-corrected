sound = "";
sound2 = ""; 
function preload(){
sound = loadSound("music.mp3");
sound2 = loadSound("music2.mp3");
}
function setup(){
 canvas = createCanvas(450, 400);
 canvas.position(400, 200);
 video = createCapture(VIDEO);
 video.hide(); 
}
function draw(){
 image(video, 0, 0, 450, 400);
 
}
document.getElementById("play").onclick=function(){
   sound.play();
   sound2.play();
}