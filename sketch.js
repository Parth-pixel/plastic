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
function preload()
{
	personIMG=loadImage("boy1.png");
	plasticIMG=loadImage("bottle.png");
	plastic1IMG=loadImage("plasticbottlecrushed.png");
	plastic2IMG=loadImage("bottle2.png");
	oceanIMG=loadImage("ocean.jpg");
	backgroundimage = loadImage("ocean.jpg");
	fishIMG = loadImage("fish.png");
	musicSound = loadSound("My Video.mp4");
	bg1=loadImage("background1.jpg");
	fishDeadImg=loadImage("fishDead.png");
	boyImg=loadImage("boy standing.png");

}

function setup() {
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
	
		
	boySprite=createSprite(100, 300, 10,10);
	boySprite.addImage(boyImg);
	boySprite.scale=0.8;
	
	
	
	

	
  
}


function draw() {
	plastic();
	Fish();
	
	//musicSound.play();
	if(gamestate==="start"){
		boySprite.visible=true;
		background(bg1);

		console.log(boySprite.x);
		
		personIMG.visible=false;
		oceanIMG.visible=false;
		textSize(20);
		fill("black");
		textFont("Comic Sans MS");
	text("Hello Friends!",400,350);
	text("Welcome to my World!",400,380);
	text("This is similar to the real world which is polluted by humans!",400,410);
	text("I am on a mission to clean it!",400,440);
	text("Press Enter to join my mission!",400,480);

	if(keyDown("enter")){
		gamestate="intro";
	}
}
	if(gamestate==="intro"){
		boySprite.visible=true;
		background(bg1);

		
		personIMG.visible=false;
		oceanIMG.visible=false;
		textSize(20);
		fill("black");
		textFont("Comic Sans MS");
	text("Help the swimmer collect plastic trash from the ocean!",400,350);
	text("Use up and down arrow keys to move the swimmer.",400,390);
	text("Press space to begin",400,450);
	if(keyDown("space")){
		gamestate="play";
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
	personSprite.depth = personSprite.depth+1;
	
	
  
  
  ocean.velocityX = -(3 + 5* score/10)
  
  
 
 
  
  drawSprites();

  fill("black")
  textSize(20);
  text("Score: "+ score, 500,50);

  if (personSprite.isTouching(plasticSpritegroup)){
	plasticSpritegroup.destroyEach();
	score = score+1;
	

}


if (plasticSpritegroup.isTouching(fishgroup)){
	fish.changeImage(fishDeadImg);
	//score = score-1;
}
}
if (gamestate === "End"){
	    ocean.velocityX = 0;
		plasticSpritegroup.velocityX = 0;
		plasticSpritegroup.destroyEach();
		background(0);
		fill("white");
		textSize(30);
		text("Congratulations You Have successfully cleaned the Ocean", 200,200);
}
if (score === 20){
	gamestate = "End";
}
}



function plastic(){
	if (frameCount % 100 === 0){
		
		plasticSprite=createSprite(900, 100, 10,10);
	plasticSprite.velocityX = 3;
	plasticSprite.scale=0.1
	
    plasticSprite.y = Math.round(random(200,500));
	

		plasticSprite.velocityX = -4;

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
	if (frameCount % 100 === 0){
	
	  fish = createSprite(50,50,10,10);
	  fish.addImage(fishIMG);
	  fish.scale = 0.2;
	  fish.velocityX =2;
	  fish.y = Math.round(random(100,500));
	  fishgroup.add(fish);
}
}
