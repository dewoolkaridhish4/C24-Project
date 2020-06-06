const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

  ground1= new Ground(370,695,870,10);
	ball1=new Ball(55,576,10,10);
	box1=new Box(657,640,20,100);
	box2=new Box(754,640,20,100);
	box3=new Box(707,680,100,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white");
  text("y:"+mouseY,50,75);
  text("x:"+mouseX,50,50);

  ground1.display();
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});
	}
}



