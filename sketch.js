var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    box.x=box.x + 2
    background("red")
  }

  if (keyIsDown(LEFT_ARROW)){
    box.x=box.x - 2
    background("green")
  }
  if (keyIsDown(UP_ARROW)){
    box.y=box.y - 2
    background("pink")
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y=box.y + 2
    background("blue")
  }
drawSprites()
}
