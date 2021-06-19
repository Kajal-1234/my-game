var gameState =  "athenaWin"


function preload(){
background1 = loadImage("desertbg.jpg");
boyimg = loadAnimation("13.png")
atheimg = loadAnimation("0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png",)
boyImg1 = loadAnimation("14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png","40.png","42.png","43.png")
}



function setup() {
	createCanvas(displayWidth-40,displayHeight-30);


	

	//Create the Bodies Here.
	ground = createSprite(width/2,height-10,displayWidth,20)
  //ground.addImage(background1)
  //ground.scale=9
	boy    =  createSprite(width/5,height-160,100,100)
boy.addAnimation("anim",boyimg);
boy.addAnimation("collided",boyImg1)
boy.scale = (2);

  athena = createSprite(width/1.2,height-110,100,100);
  athena.addAnimation("goddess",atheimg);
  athena.scale = (2)


 healthBar1 = createSprite(175,100,300,25);
 healthBar1.shapeColor = "white";

  healthLevel1 = createSprite(175,100,290,15);
  healthLevel1.shapeColor = "red";

  healthBlock1 = createSprite(19,100,40,45);
  healthBlock1.shapeColor = "lightgrey";


  healthBar2 = createSprite(windowWidth-175,100,300,25);
  healthBar2.shapeColor = "white";

  healthLevel2 = createSprite(windowWidth-175,100,290,15);
  healthLevel2.shapeColor = "red";

  healthBlock2 = createSprite(windowWidth-19,100,40,45);
  healthBlock2.shapeColor = "lightgrey";
  
  healthBlock1.depth = healthLevel2.depth;
  healthLevel2.depth -= 1;

   // restart btn
  restart = createButton('RESTART');
  restart.position(windowWidth/2-60,windowHeight/2-100);
  restart.style('width','120px');
  restart.style('height','60px');
  restart.style('border-radius','20px');
  restart.style('color','black');
  restart.style('font-size','20px');
  restart.hide();
  restart.mousePressed(() => {
    gameState = "play";
    healthLevel1.x = 175;
    healthLevel2.x = windowWidth-175;
    boy.x = 400;
    athena.x =windowWidth-400;
  })
}


function draw() {
  rectMode(CENTER);
  background(background1);
drawSprites();
 
 //Player movement  

 if(gameState==="play"){
     frameRate(50);
  restart.hide();
  
if(keyWentDown(RIGHT_ARROW)){
  boy.x=boy.x+15
boy.changeAnimation("collided",boyImg1)
  }
if(keyWentDown(LEFT_ARROW)){
  boy.x=boy.x-15
  boy.addAnimation("anim",boyimg);
} 
if(keyWentDown(UP_ARROW)){
 boy.velocityY=-5
  boy.addAnimation("anim",boyimg);
}
boy.velocityY=boy.velocityY+0.2
boy.collide(ground)

//Enemy movement

if(keyWentDown("w")){
  athena.x=athena.x+15 
  }
if(keyWentDown("s")){
  athena.x=athena.x-15
  }
if(keyWentDown("d")){
 athena.velocityY=-5
}
athena.velocityY=athena.velocityY+0.2
athena.collide(ground)


  if(boy.isTouching(athena)){
 healthLevel1.x -= 0.5;

 }

  if(athena.isTouching(boy)){
 healthLevel2.x += 0.5;

 }
 
 

 if(healthLevel1.x<-100) {
   gameState = "athenaWin";
  }

  if(healthLevel2.x>windowWidth+100) {
    gameState = "boyWin";
  }
 }
 
  if(gameState==="boyWin"){
  textSize(25);
  fill("red");
  text("Boy WINS!!",windowWidth/2-70,windowHeight/2-125);
  restart.style('background','red');
  restart.show();

} else if(gameState === "athenaWin") {

  

  textSize(25);
  fill("blue");
  text("ATHENA WINS!!",windowWidth/2-70,windowHeight/2-125);
  restart.style('background','blue');
  restart.show();
}
}

 



