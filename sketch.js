const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var boton;
var boton2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  boton = createImg("up.png");
  boton.position(20,30);
  boton.size(50,50);
  boton.mouseClicked(force2);
  
  boton2 = createImg("right.png");
  boton2.position(220,30);
  boton2.size(50,50);
  boton2.mouseClicked(force);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options ={
    restitution:0.95

  }
 ball = Bodies.circle(100,300,20,ball_options);
 World.add(world, ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

}

function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function force2(){
Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:0.07})
}