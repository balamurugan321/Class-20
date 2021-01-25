var movingRec,fixedRec;
var rec1,rec2;

function setup() {
  createCanvas(800,400);
  movingRec = createSprite(400, 200, 50, 50);
  movingRec.debug = true;
  movingRec.shapeColor = "green";

  fixedRec = createSprite(200, 200, 50, 80);
  fixedRec.debug = true;
  fixedRec.shapeColor = "green";

  rec1 = createSprite(500, 50, 50, 50);
  rec1.debug = true;
  rec1.shapeColor = "green";
  rec1.velocityY = 2;

  rec2 = createSprite(500, 350, 50, 80);
  rec2.debug = true;
  rec2.shapeColor = "green";
  rec2.velocityY = -2;
}

function draw() {
  background(0); 
  movingRec.x = mouseX;
  movingRec.y = mouseY;
  console.log(movingRec.x - fixedRec.x);
    console.log(movingRec.width/2 + fixedRec.width/2);
  if(movingRec.x-fixedRec.x < movingRec.width/2 + fixedRec.width/2 && fixedRec.x-movingRec.x < movingRec.width/2 + fixedRec.width/2
     && movingRec.y-fixedRec.y < movingRec.height/2 + fixedRec.height/2 && fixedRec.y-movingRec.y < movingRec.height/2 + fixedRec.height/2 ){
    fixedRec.shapeColor = "white";
    movingRec.shapeColor = "white";
  }
  else{
    fixedRec.shapeColor = "green";
    movingRec.shapeColor = "green";
  }
  if(rec2.y-rec1.y < rec1.height/2 + rec2.height/2 && rec1.x-rec2.x < rec2.height/2 + rec1.height/2){
    rec1.velocityY = rec1.velocityY* (-1);
    rec2.velocityY = rec2.velocityY* (-1);
  }
  drawSprites();
}