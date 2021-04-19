var fixedRect, movingRect, Rect1, Rect2
function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400, 210, 50, 50);
  Rect1=createSprite(50,350,100,100)
  Rect2=createSprite(750,350,100,100)
  Rect1.velocityX=2;
  //Rect1.velocityY=2;
  Rect2.velocityX=-2;
  //Rect2.velocityY=-2;
  Rect1.shapeColor="cyan"
  Rect2.shapeColor="yellow"

}

function draw() {
  background(0); 
movingRect.x= World.mouseX 
movingRect.y= World.mouseY


if(fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2 && 
  movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.y-movingRect.y<=fixedRect.height/2 + movingRect.height/2 && 
  movingRect.y-fixedRect.y<=fixedRect.height/2 + movingRect.height/2 
  ){
  fixedRect.shapeColor="lime"
  movingRect.shapeColor="lime"
}
else{
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"

}

if(Rect1.x-Rect2.x<=Rect1.width/2 + Rect2.width/2 &&
  Rect2.x-Rect1.x<= Rect1.width/2 + Rect2.width/2){
Rect1.velocityX = Rect1.velocityX*(-1)
Rect2.velocityX =Rect2.velocityX*(-1)
  }

  if(Rect1.y-Rect2.y<=Rect1.height/2 + Rect2.height/2 &&
    Rect2.y-Rect1.y<= Rect1.height/2 + Rect2.height/2){
  Rect1.velocityY = Rect1.velocityY*(-1)
  Rect2.velocityY =Rect2.velocityY*(-1)
    }





  drawSprites();
}