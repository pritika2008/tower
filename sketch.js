var ground, box1;
var box2, box3;
var box4, box5;
var box6, box7;
var box8, box9;
var box10, box11;
var box12, box13;
var box14, box15;
var box16, polygon;
var slingshot, score;
const Engine = Matter.Engine;
const World = Matter.World;



function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;
	score = 0;
	text("SCORE : "+score, 750, 40);

	Engine.run(engine);

	ground = new Ground(390, 285, 210, 10);
	//layer1
	box1 = new Box(300, 275, 30, 40);
	box2 = new Box(330, 275, 30, 40);
	box3 = new Box(360, 275, 30, 40);
	box4 = new Box(390, 275, 30, 40);
	box5 = new Box(420, 275, 30, 40);
	box6 = new Box(450, 275, 30, 40);
	box7 = new Box(480, 275, 30, 40);
	//layer 2
	box8 = new Box(330, 235, 30, 40);
	box9 = new Box(360, 235, 30, 40);
	box10 = new Box(390, 235, 30, 40);
	box11 = new Box(420, 235, 30, 40);
	box12 = new Box(450, 235, 30, 40);
	//layer 3
	box13 = new Box(360, 195, 30, 40);
	box14 = new Box(390, 195, 30, 40);
	box15 = new Box(420, 195, 30, 40);
	//layer 4
	box16 = new Box(390, 155, 30, 40);
	

	polygon = new Polygon(100, 100, 30, 30);
	slingshot = new Slingshot(100, 100);




  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  mouseDragged();
  mouseReleased();
  
  drawSprites();

 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



