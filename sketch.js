var canvas;
var car1
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState = 0;
var car_red, car_white;
var pista;
var allPlayers;
var cars = []
var playerCount;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_red = loadImage("./assets/car red.png");
  car_white = loadImage("./assets/car white.png");
  pista = loadImage("./assets/pista.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);

  if(PlayerCount == 2){
    game.update(1);
  
  }
  if(gameState == 1){
    game.play();

  }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
