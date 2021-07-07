var ship, shipImg1,edges;
var sea, seaImg
function preload(){
  seaImg=loadImage("sea.png")
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,170,600,15)
  sea.addImage(sea.png)
  ship = createSprite(200,200,50,50);
  ship.addAnimation("floating",shipImg1)
  edges = createEdgeSprites();
  ship.scale = 0.5;
  ship.x = 50
 
}
  

function draw(){ 
  background("blue");

  console.log(ship.x)
  
  ship.velocityX = ship.velocityX + 0.5;
  sea.velocityX=-4
  if(ship.x<0){
    sea.x=sea.width/2
  }
  
  sea.collide (sea)

  drawSprites();
}
