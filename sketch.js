var ham;
function setup() {
  createCanvas(400,400);
  ham= createSprite(200,200,20,20);
}
    function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
  ham.position.y -= 5
  }

  if(keyIsDown(DOWN_ARROW)){
    ham.position.y += 5
  }

  if(keyIsDown(LEFT_ARROW)){
    ham.position.x -= 5
  }

  if(keyIsDown(RIGHT_ARROW)){
    ham.position.x += 5
  }
  drawSprites();
}




