var footmanImg, legionaryImg, championImg;
var knightImg, knightImg2, knightImg3, knightImg4, finalBossImg;
var swordImg, swordImg2, swordImg3;
var shieldImg, shieldImg2, shieldImg3;
var armorImg, armorImg2, armorImg3;
var backgroundImg, backgroundImg2, backgroundImg3, backgroundImg4;

var knight
var footman
var legionary
var champion
var finalBoss
var sword
var shield
var armor


function preload() {
  footmanImg = loadImage("footman.png")
  legionaryImg = loadImage("legionary.png")
  championImg = loadImage("champion.png")

  finalBossImg = loadImage("final boss.png")


  knightImg = loadImage("knight1.png")
  knightImg2 = loadImage("knight2.png")
  knightImg3 = loadImage("knight3.png")
  knightImg4 = loadImage("knight4.png")

  swordImg = loadImage("sword1.png")
  swordImg2 = loadImage("sword2.png")
  swordImg3 = loadImage("sword3.png")
  
  shieldImg  = loadImage("shield1.png")
  shieldImg2 = loadImage("shield2.png")
  shieldImg3 = loadImage("shield3.png")
    
  armorImg  = loadImage("armor.png")
  armorImg2 = loadImage("armor2.png")
  armorImg3 = loadImage("armor3.png")

  backgroundImg  = loadImage("lvl 1.jpg")
  backgroundImg2 = loadImage("lvl 2.png")
  backgroundImg3 = loadImage("lvl 3.jpg")
  backgroundImg4 = loadImage("lvl 4.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  sword1 = createSprite(1800,750,10,10)
  sword1.addImage(swordImg)
  sword1.scale = 0.25
   
  shield1 = createSprite(1800,750,10,10)
  shield1.addImage(shieldImg)
  shield1.scale = 0.45

  armor = createSprite(1800,750,10,10)
  armor.addImage(armorImg)
  armor.scale = 0.5

  knight = createSprite(100,750,10,10)
  knight.addAnimation("boi_runnin", knightImg)
  knight.scale = 0.45
  
 
  
}

function draw() {
  background(255,255,255);  
  imageMode(CENTER)
  image(backgroundImg, windowWidth/2, windowHeight/2, 4500, windowHeight)
  image(backgroundImg2, 4050, windowHeight/2, 4500, windowHeight)
  image(backgroundImg3, 6750,  windowHeight/2, 4500, windowHeight)
  image(backgroundImg4, 9450,  windowHeight/2, 4500, windowHeight)
   camera.position.x = knight.x

  if (keyDown(RIGHT_ARROW)){
    knight.x += 10
  }

 console.log(knight.x)

 if(keyDown(LEFT_ARROW)){
   knight.x -= 10
  
 }

 if(knight.isTouching(armor)){
  knight.changeAnimation("Strongboi_runnin", knightImg2)
}


 spawnFootman();
 spawnLegionary ();
 spawnChampion ()

  drawSprites();
}

function spawnFootman (){

  if(frameCount%150 === 0){
    footman = createSprite(500,750, 20, 40)
    footman.addImage(footmanImg)
    footman.scale = 0.5
    footman.velocityX = -3

  }

 
}

function spawnLegionary (){

  if(frameCount%300 === 0){
    legionary = createSprite(4200,750,20,20)
    legionary.addImage(legionaryImg)
    legionary.scale = 0.5
    legionary.velocityX = -4
  }
}

function spawnChampion (){

  if(frameCount%300 == 0){
  champion = createSprite(7000, 750, 20,20)
  champion.addImage(championImg)
  champion.scale = 0.5
  champion.velocityX = -5
  }
}