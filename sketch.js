
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1,dustbin2,dustbin3;
var ground;


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper1 = new Paper(200,370,20,20);
	dustbin2 = new Dustbin(655,366,75,25);
	dustbin1 = new Dustbin(625,341,25,75);
	dustbin3 = new Dustbin(700,341,25,75);
	

	ground = new Ground(400,390,1000,20);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);


  ground.display();
  paper1.display();
  paper1.update();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}

