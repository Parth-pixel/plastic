var personIMG, personSprite, plasticSprite,plastic1Sprite,plastic2Sprite,plastic1IMG,plastic2IMG;
var ocean, oceanIMG,backgroundimage;
var score;
var plasticSpritegroup;
var gamestate = "play";
//var packageBody,ground;
//var red1, red2, red3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	personIMG=loadImage("energetic swimmer.png");
	plasticIMG=loadImage("bottle.png");
	plastic1IMG=loadImage("plasticbottlecrushed.png");
	plastic2IMG=loadImage("bottle2.png");
	oceanIMG=loadImage("ocean.jpg");
	backgroundimage = loadImage("sand.jpg")
}

function setup() {
	createCanvas(1300, 400);
	//rectMode(CENTER);
	
	score = 0;
	ocean=createSprite(650,300,1300,50);//width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	ocean.addImage(oceanIMG);
	ocean.scale = 2;


	plasticSpritegroup = createGroup();

	
	

	personSprite=createSprite(100, 350, 10,10);
	personSprite.addImage(personIMG)
	personSprite.scale=0.2;
	
	
	
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
   // packageSprite.collide(red1);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	personSprite.debug = true;
	personSprite.setCollider("rectangle",0,0,700,500)
	if (gamestate === "play"){
	background("white");//backgroundimage);

	if (ocean.x < 0){
		ocean.x =ocean.width/2;
	  }
	
	

	if (keyDown(UP_ARROW)){
		personSprite.y = personSprite.y - 2;
	}
	if (keyDown(DOWN_ARROW)){
		personSprite.y = personSprite.y+2;
	}
	//personSprite.depth = personSprite.depth+1;
	
	plastic();
  rectMode(CENTER);
  
  ocean.velocityX = -(3 + 5* score/10)
  
  
 
 // packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  
  drawSprites();
  text("Score: "+ score, 500,50);
  if (personSprite.isTouching(plasticSpritegroup)){
	plasticSpritegroup.destroyEach();
	score = score+1;
	
}
}
if (gamestate === "End"){
	    ocean.velocityX = 0;
		plasticSpritegroup.velocityX = 0;
		plasticSpritegroup.destroyEach();
		background(0);
		fill("white");
		textSize(100);
		text("Congratulations You Have successfully cleaned the Ocean", 200,200);
}
if (score === 20){
	gamestate = "End";
}
}



function plastic(){
	if (frameCount % 100 === 0){
		plasticSprite=createSprite(700, 380, 10,10);
	//plasticSprite.addImage(plasticIMG)
	plasticSprite.scale=0.1
	plasticSpritegroup.add(plasticSprite);
    plasticSprite.y = Math.round(random(100,500));
	
	//plastic1Sprite=createSprite(700,380, 10,10);
	//plastic1Sprite.addImage(plastic1IMG)
	//plastic1Sprite.scale=0.4

//	plastic2Sprite=createSprite(1300, 350, 10,10);
	//plastic2Sprite.addImage(plastic2IMG)
	//plastic2Sprite.scale=0.1;
		plasticSprite.velocityX = -6
		//plastic1Sprite.velocityX = -6
		//plastic2Sprite.velocityX = -6
		
		 //generate random obstacles
		 var rand = Math.round(random(1,3));
		 switch(rand) {
		   case 1: plasticSprite.addImage(plasticIMG);
				   break;
		   case 2: plasticSprite.addImage(plastic1IMG);
				   break;
		   case 3: plasticSprite.addImage(plastic2IMG);
				   break;


				   default:break;
		   
}
	}

}

