var object22,object11

function setup() {

  createCanvas(800,400);


  object22=createSprite(400, 200, 100, 50);
  object22.shapeColor="green"
  object22.debug=true;
  object11=createSprite(200,200,50,100)
  object11.shapeColor="green"
  object11.debug=true;
}

function draw() {
  background(0,0,0);  
object11.x=World.mouseX;
object11.y=World.mouseY;

if(isTouching(object11,object22)){
object22.shapeColor="red"
object11.shapeColor="red"

}
else{
object22.shapeColor="green"
object11.shapeColor="green"
}

  drawSprites();
}

