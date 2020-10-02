//variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;

var PLAY =1;
var END =0;
var gameState =1;
var survivalTime;
//preload function
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
//setup funcction
function setup() {
  createCanvas(600,600);
  
   monkey =createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground =createSprite(400,350,900,10);
  ground.velocityX =  -4;
  ground.x=ground.width/2;
  
  score =0;
  
  
  bananaGroup =new Group();
  obstacleGroup = new Group();

  
}

//draw function
function draw() {
  background("white");
  fill("black");
  textSize(20);
  text("Survival Time: " +score, 250, 50);
  fill("black");
  
  //score function
  score = score + Math.round(getFrameRate()/60);
 //if condition play state
    if(gameState === PLAY){
     
     if(keyDown("space") && monkey.y >= 200) {
    monkey.velocityY =-12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
     
     monkey.collide(ground);
     
     createbanana();
     createObstacles();
     
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
   }
  //if condition group
  if(obstacleGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
      ground.velocityX = 0;
    monkey.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
     obstacleGroup.setLifetimeEach(-1);
  }
  
  
  
  
  
  //draw sprites
   drawSprites();
  
}
//bananas function
function createbanana() {
  if (frameCount % 80 === 0) {
    var banana =createSprite(700,315,20,20);
     banana.y = Math.round(random(120,200));
    banana.addImage("banana", bananaImage); 
    banana.velocityX =-8;
    banana.lifetime =150;
    banana.scale=0.1;
    //banana group
    bananaGroup.add(banana);
  }
  
  
}

//obstacle function
function createObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(700,325,10,40);
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -6
   
   obstacle.scale=0.1;
 
   
    //assign scale and lifetime to the obstacle           
    
    obstacle.lifetime = 300;
   //obstacle group
   obstacleGroup.add(obstacle);
  
 }
}








