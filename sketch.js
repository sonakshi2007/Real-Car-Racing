var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var cars,car1,car2,car3,car4;
var distance=0;
var track,c1img,c2img,c3img,c4img;
function preload(){
  track=loadImage("track.jpg");
  ground=loadImage("ground.png");
  c1img=loadImage("car1.png");
  c2img=loadImage("car2.png");
  c3img=loadImage("car3.png");
  c4img=loadImage("car4.png");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayWidth-30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount==4){
    game.update(1);

  }
  if(gameState==1){
    clear();
    game.play();
  }
  if(gameState==2){
    game.end();
  }
}
