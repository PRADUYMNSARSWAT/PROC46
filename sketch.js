var Car
var Car2


function preload(){
  mainCarImg = loadImage("CAR_1.png")
  Car2Img = loadImage("CAR_2.png")
  roadImg = loadImage("ROAD.jpg")
}


function setup() {
  createCanvas(800,400);
  road = createSprite(400,200,700,50)
  road.addImage("ROAD",roadImg)
  road.velocityX = -5
 car = createSprite(450, 300, 50, 50);
 car.addImage("mainCar",mainCarImg)
 car.scale = 0.15

 car2 = createSprite(400, 350, 50, 50);
 car2.addImage("car2",Car2Img)
 car2.scale = 0.2

 
}


function draw() {
  background(255,255,255);  
  drawSprites();
}