var movingRect,fixedRect;
var rect1, rect2;
var rect3, rect4;

function setup() {
  createCanvas(800,700);
  movingRect=createSprite(700,100,80,50);
  fixedRect=createSprite(400,100,50,80);

  rect1= createSprite(200,100,50,50);
  rect2 = createSprite(600,100,50,50);
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

  rect3 = createSprite(100,50,50,50);
  rect4 = createSprite(100,500,50,50);
  rect3.shapeColor = "white"
  rect4.shapeColor = "green"
  rect3.velocityY = 4
  rect4.velocityY = -4
}

function draw() {
  background(0);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  rect2.x=mouseX;
  rect2.y=mouseY;

  /*if(myIsTouching(movingRect,fixedRect)){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }*/

  if(myIsTouching(rect1,rect2)){
    rect1.shapeColor="pink";
    rect2.shapeColor="pink";
  }
  else{
    rect1.shapeColor="blue";
    rect2.shapeColor="blue";

  }

  myBounceoff(rect3,rect4) 
    
  

  drawSprites();
}

