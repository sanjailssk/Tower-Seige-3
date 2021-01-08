const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Ground1,Ground2,Ground3;
var Bluebox1,Bluebox2,Bluebox3,Bluebox4,Bluebox5,Bluebox6,Bluebox7,Bluebox8,Bluebox9,Bluebox10,Bluebox11,Bluebox12;
var Greenbox1,Greenbox2,Greenbox3,Greenbox4,Greenbox5,Greenbox6;
var Pinkbox1,Pinkbox2,Pinkbox3,Pinkbox4,Pinkbox5;
var Yellowbox1,Yellowbox2;
var pentagon,sling,bg;
var backgroundImg;

var bg = "grass.jpg";
var score = 0;

function preload(){
  getBackgroundImg();
}

function setup(){
 createCanvas(1300,600);

 engine = Engine.create();
 world = engine.world;

  //First Set
  Ground1 = new Ground(650,500,300,15);

  //Bottom level
  Bluebox1 = new blueBox(620,470,35,50);
  Bluebox2 = new blueBox(585,470,35,50);
  Bluebox3 = new blueBox(550,470,35,50);
  Bluebox4 = new blueBox(655,470,35,50);
  Bluebox5 = new blueBox(690,470,35,50);
  Bluebox6 = new blueBox(725,470,35,50);
  Bluebox7 = new blueBox(760,470,35,50);

  //third level
  Pinkbox1 = new pinkBox(585,417,35,50);
  Pinkbox2 = new pinkBox(620,417,35,50);
  Pinkbox3 = new pinkBox(655,417,35,50);
  Pinkbox4 = new pinkBox(690,417,35,50);
  Pinkbox5 = new pinkBox(725,417,35,50);

  //second level
  Greenbox1 = new greenBox(620,368,35,50);
  Greenbox2 = new greenBox(655,368,35,50);
  Greenbox3 = new greenBox(690,368,35,50);

  //first level
  Yellowbox1 = new yellowBox(655,318,35,50); 

  //second set
  Ground2 = new Ground(1050,380,250,15);

 //bottom level
  Bluebox8 = new blueBox(980,347,35,50);
  Bluebox9 = new blueBox(1015,347,35,50);
  Bluebox10 = new blueBox(1050,347,35,50);
  Bluebox11 = new blueBox(1085,347,35,50);
  Bluebox12 = new blueBox(1120,347,35,50);

  //second level
  Greenbox4 =new greenBox(1015,297,35,50);
  Greenbox5 =new greenBox(1050,297,35,50);
  Greenbox6 =new greenBox(1085,297,35,50);

  //first level
  Yellowbox2 = new yellowBox(1050,248,35,50);

  //create pentagon
  pentagon = new Polygon(150,420,20);

  //create constraint
  sling = new SlingShot(pentagon.body,{x:150,y:417});

  //create bottom ground
  Ground3 = new Ground(700,600,1900,50);
}

function draw(){
  if(backgroundImg)
      background(backgroundImg);

 fill("cyan")
 textSize(30);
 text("Score:" + score,600,150);

 Engine.update(engine);

 Ground1.display();
 Bluebox1.display();
 Bluebox1.score();
 Bluebox2.display();
 Bluebox2.score();
 Bluebox3.display();
 Bluebox3.score();
 Bluebox4.display();
 Bluebox4.score();
 Bluebox5.display();
 Bluebox5.score();
 Bluebox6.display();
 Bluebox6.score();
 Bluebox7.display();
 Bluebox7.score();
 Bluebox8.display();
 Bluebox8.score();
 Bluebox9.display();
 Bluebox9.score();
 Bluebox10.display();
 Bluebox10.score();
 Bluebox11.display();
 Bluebox11.score();
 Bluebox12.display();
 Bluebox12.score();
 Pinkbox1.display();
 Pinkbox1.score();
 Pinkbox2.display();
 Pinkbox2.score();
 Pinkbox3.display();
 Pinkbox3.score();
 Pinkbox4.display();
 Pinkbox4.score();
 Pinkbox5.display();
 Pinkbox5.score();
 Greenbox1.display();
 Greenbox1.score();
 Greenbox2.display();
 Greenbox2.score();
 Greenbox3.display();
 Greenbox3.score();
 Greenbox4.display();
 Greenbox4.score();
 Greenbox5.display();
 Greenbox5.score();
 Greenbox6.display();
 Greenbox6.score();
 Yellowbox1.display();
 Yellowbox1.score();
 Yellowbox2.display();
 Yellowbox2.score();
 Ground2.display();
 sling.display();
 pentagon.display();
 Ground3.display();

  strokeWeight(0);
  fill("white");
  textSize(33);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,70);
}

//Mouse drag function to adjust the aim of hexagon
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

//mouse release function to null the bodyA nd let it fly
function mouseReleased(){
   sling.fly();
}

//keypressed function to attach stone back to constraint
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(pentagon.body,{x:150,y:150});
    sling.attach(pentagon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=0600 && hour<=1900){
    bg = "grass.jpg"
  }
  else{
    bg = "night.jpg"
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
