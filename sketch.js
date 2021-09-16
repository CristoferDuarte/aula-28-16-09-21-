const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, box2, box3, box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird
var backgroundImg;
//var log6
var sling1
var plataform



function preload(){
    backgroundImg = loadImage('sprites/bg.png')
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plataform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(200,height,1550,20);
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(756,120,155,PI/7);
    log4 = new Log(870,120,155,-PI/7);

    bird = new Bird(100,100);
    //log6 = new Log(230,180,80,PI/2);
    sling1 = new slingShot(bird.body, {
        x: 200 , y: 100
    });
    

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
    //log6.display();
    sling1.display();
    
    plataform.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{
        x: mouseX , y: mouseY
    })
}

function mouseReleased(){
    sling1.fly()
}