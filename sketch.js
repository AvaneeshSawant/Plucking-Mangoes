
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var boy, boyImg;
var tree, treeImg;
var slingShot;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
	treeImg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 350, 1200, 20);

	boy = createSprite(200, 295, 100, 30);
	boy.addImage(boyImg);
	boy.scale = 0.08;

	tree = createSprite(1000, 180, 40, 10)
	tree.addImage(treeImg);
	tree.scale = 0.27

	stone = new Stone(160, 250, 20);

	mango1 = new Mango(1000, 100)
	mango2 = new Mango(930, 87)
	mango3 = new Mango(1075, 75)
	mango4 = new Mango(1105, 135)
	mango5 = new Mango(895, 125)
	mango6 = new Mango(975, 55)
	mango7 = new Mango(1045, 125)
	mango8 = new Mango(1035, 45)
	mango9 = new Mango(955, 145)

	slingShot = new Slingshot(stone.body, {x: 160, y: 250})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  drawSprites();

  ground.display();

  slingShot.display();
  
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY})
}

function mouseReleased() {
	slingShot.fly();
}

function detectCollision(lstone, lmango) {
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		slingshot.attach(stone.body) 
	}
}