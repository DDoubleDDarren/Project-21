var wall,thickness,bullet,speed,weight;

function setup() 
{
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200,300,thickness,100);
  wall.shapeColor = (80,80,80);

  bullet = createSprite(100, 300, 20, 10);
  bullet.shapeColor = (80,80,80);


}

function draw() 
{
  background(255,255,255);
if(keyDown("SPACE")){
  bullet.velocityX = speed;
    var damage = (0.5*weight*speed*speed)/(weight*weight*weight);
    if(damage>10){
      wall.shapeColor = color(250,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  bullet.collide(wall);

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletLeftEdge>=wallLeftEdge){
    return true
  }
  return false;
}