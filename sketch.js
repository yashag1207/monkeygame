
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivaltime;
var ground,ground_image;


function preload(){
 monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-10
  ground.x=ground.width/2
  console.log(ground.x)
  
  
  monkey=createSprite(80,135,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.09
  
 monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
 monkey.debug = false
 
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  
  
score=0;
survivaltime=0
}


function draw() {

  background("white")


  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >= 315) {
        monkey.velocityY = -12;
   }
  monkey.velocityY = monkey.velocityY + 0.8
  console.log(monkey.y);

  monkey.collide(ground);
  
  spawnClouds(); 
  spawnObstacles();
  
  drawSprites();
  
   
  if(obstacleGroup.isTouching(monkey)){
    monkey.VelocityY=0;
    ground.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
   bananaGroup.setLifetimeEach(-1);
    
    
  } 
  
 stroke("black");
  fill("black");
  textSize=20
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survival Time =",+survivaltime,30,100)
  
 
  
  
}

function spawnObstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(500,335,10,40);
   obstacle.velocityX = -2
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.08
   
   obstacleGroup.add(obstacle);
   
 }}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var banana = createSprite(200,120,40,10);
    banana.y = Math.round(random(150,180));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 190;

bananaGroup.add(banana);

  }}
