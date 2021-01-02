var personIMG, personSprite, plasticSprite,plastic1Sprite,plastic2Sprite,plastic1IMG,plastic2IMG;
var ocean, oceanIMG,backgroundimage;
var score;
var plasticSpritegroup;
var gamestate = "start";
var fishIMG;
var fish;
var musicSound;
var fishgroup;
var bg1;
var fishDeadImg;
var boySprite,boyImg;
var endIMG;
var personSpritegroup;

function preload()
{
	personIMG=loadImage("boy1.png");
	plasticIMG=loadImage("bottle.png");
	plastic1IMG=loadImage("plasticbottlecrushed.png");
	plastic2IMG=loadImage("bottle2.png");
	oceanIMG=loadImage("ocean.jpg");
	backgroundimage = loadImage("ocean.jpg");
	fishIMG = loadImage("fish.png");
	musicSound = loadSound("sound.mp3");
	bg1=loadImage("background1.jpg");
	fishDeadImg=loadImage("fishDead.png");
	boyImg=loadImage("boy standing.png");
	endIMG = loadImage("clean ocean.jpg");

}

function setup() {
	boySprite=createSprite(100, 300, 10,10);
	boySprite.addImage(boyImg);
	boySprite.scale=0.8;
	createCanvas(1200, 600);
	//rectMode(CENTER);
	
	score = 0;
	ocean=createSprite(650,300,1300,50);//width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	ocean.addImage(oceanIMG);
	ocean.scale = 1;


	plasticSpritegroup = createGroup();
    fishgroup = createGroup();
	
	

	personSprite=createSprite(100, 350, 10,10);
	personSprite.addImage(personIMG)
	personSprite.scale=0.4;
	personSprite.debug=false;
	personSprite.setCollider("rectangle",0,0,400,250);
	
	//personSprite.velocityX = 4;
		
	
	
	
	
	

	
  
}


function draw() {
	plastic();
	Fish();
	if(gamestate==="intro"){
		boySprite.visible=true;
		background(bg1);
		
		
		personIMG.visible=false;
		oceanIMG.visible=false;
		textSize(20);
		fill("black");
		textFont("Comic Sans MS");
	text("Water Pollution Is a Major Concern Marine Life Is Getting Destroyed.",300,250);
	text("So, Let us Play And Clean The Trash Before the Fishes eat It And Die.",330,280);
	text("If You Clean The Trash plus 1 Point.",360,310);
	text("Use up and down arrow keys to move the swimmer.", 360,350);
	text("Press space to begin.",390,380);
	if(keyDown("space")){
		gamestate="play";
	}
	
	}
	musicSound.play();
	if(gamestate==="start"){
		boySprite.visible=true;
		background(bg1);
		
		
		console.log(boySprite.x);
		
		personIMG.visible=false;
		oceanIMG.visible=false;
		textSize(20);
		fill("black");
		textFont("Comic Sans MS");
	text("Hello Friends!",400,250);
	text("Welcome to my World!",400,280);
	text("This is similar to the real world which is polluted by humans!",400,310);
	text("I am on a mission to clean it!",400,340);
	text("Press Enter to join my mission!",400,380);

	if(keyDown("enter")){
		gamestate="intro";
	}
	
}
	
	
	if (gamestate === "play"){
		
	background("white");
	boySprite.visible=false;
	
	
   // console.log(ocean.x);
	if (ocean.x < 500){
		ocean.x =ocean.width/2;
	  }
	

	if (keyDown(UP_ARROW)){
		personSprite.y = personSprite.y - 4;
	}
	if (keyDown(DOWN_ARROW)){
		personSprite.y = personSprite.y+4;
	}

	//if (keyDown(LEFT_ARROW)){
	//	personSprite.x = personSprite.x - 3;
	//}

	//if (keyDown(RIGHT_ARROW)){
	//	personSprite.x = personSprite.x + 3;
	//}
	personSprite.depth = personSprite.depth+1;
	
	
  
  
  ocean.velocityX = -(3 + 5* score/10)
  
  
 
 
  
  drawSprites();

  fill("black")
  textSize(20);
  textFont("Comic Sans MS");
  text("Score: "+ score, 500,50);

  for(var i=0;i<plasticSpritegroup.length;i++){
  if (plasticSpritegroup.get(i).isTouching(personSprite)){

	plasticSpritegroup.get(i).destroy();
	score = score+1;
	
  }
}


for(var i=0;i<fishgroup.length;i++){
	if (fishgroup.get(i).isTouching(plasticSpritegroup)){
  
		fishgroup.get(i).addImage(fishDeadImg);
	
		
				
	  
	}
  }
}
if (gamestate === "End"){
	    
		background(oceanIMG);
		
		endIMG.scale = 0.5;
	    ocean.velocityX = 0;
		plasticSpritegroup.velocityX = 0;
		plasticSpritegroup.destroyEach();
		//background(0);
		fill("Fluorescent Green");
		textSize(35);
		textFont("Comic Sans MS");
		text("Congratulations! You Have successfully cleaned the Ocean", 200,200);
		text("Hope You Keep It This Way In Real Life Also",250,250);
		
}
if (score === 20){
	//endIMG.scale = 0.2;
	gamestate = "End";
}

}



function plastic(){
	if (frameCount % 100 === 0){
		
		plasticSprite=createSprite(1100, 100, 10,10);
		plastic.debug=true;
	plasticSprite.velocityX = -(7+3*score/10);
	plasticSprite.scale=0.1
	
    plasticSprite.y = Math.round(random(100,550));
	

		plasticSprite.velocityX = -10;

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
plasticSpritegroup.add(plasticSprite);
	}

}

function Fish(){
	if (frameCount % 250 === 0){
	
	  fish = createSprite(50,50,10,10);
	  fish.debug=false;
	  fish.setCollider("rectangle",0,0,500,200);
	  fish.addImage(fishIMG);
	  fish.scale = 0.15;
	  fish.velocityX =2;
	  fish.y = Math.round(random(100,500));
	  fishgroup.add(fish);
}
}
