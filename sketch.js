
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject;
var rope1,rope2,rope3, rope4,rope5;
var world;

var time, song, back;

function preload() {
	song = loadSound("Iroh.mp3");
	back = loadImage("XaviSleep.jpg");
}

function setup() {

	createCanvas(1024, 576);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(width / 2,height / 2,230,20);

	bob1 = new bob((width / 2) - 80, 500,40);
	bob2 = new bob((width / 2) - 40,500,40);
	bob3 = new bob((width / 2),500,40);
	bob4 = new bob((width / 2) + 40,500,40);
	bob5 = new bob((width / 2) + 80,500,40);
	
	
	rope1 = new rope(bob1.body,roofObject.body, -80, 0)
	rope2 = new rope(bob2.body,roofObject.body, -40, 0)
	rope3 = new rope(bob3.body,roofObject.body, 0, 0)
	rope4 = new rope(bob4.body,roofObject.body, 40, 0)
	rope5 = new rope(bob5.body,roofObject.body, 80, 0)

	song.loop();
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(back);

  time = new Date();

  roofObject.display();

  push();
  rectMode(CENTER);
  fill("brown");
  rect(width / 2, ((height / 2) + height) / 2, 20, ((height / 2) + height) / 2)
  pop();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  textSize(25);
  fill("white");

  if (time.getMinutes() < 10){
	  text(time.getHours() + ":0" + time.getMinutes(), 25, 25);
  } else {
      text(time.getHours() + ':' + time.getMinutes(), 25, 25);
  }

}

function keyPressed() {

	if (keyCode === UP_ARROW){
       Body.applyForce(bob1.body, bob1.body.position, {x: -50, y: 45});
	}

}






