var imagemJerrydaDeepWeb
var imagemTomdaDeepWeb 
var FundodaDeepWeb
var imagemJerryCopia
var imagemTomCopia
var imagemJerryFake
var imagemTomFake
var JerryFalso 
var TomFalso
function preload() {
   
    FundodaDeepWeb = loadImage("images/garden.png")
    imagemJerryFake=loadAnimation("images/mouse1.png")
    imagemJerryCopia=loadAnimation("images/mouse2.png","images/mouse3.png")
    imagemJerrydaDeepWeb=loadAnimation("images/mouse4.png")
    imagemTomFake=loadAnimation("images/cat1.png")
    imagemTomCopia=loadAnimation("images/cat2.png","images/cat3.png")
    imagemTomdaDeepWeb=loadAnimation("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
 JerryFalso=createSprite(100,600)
 JerryFalso.addAnimation("false parado",imagemJerryFake)
 JerryFalso.scale=0.2
 TomFalso=createSprite(836,600)
 TomFalso.addAnimation("false parado",imagemTomFake)
 TomFalso.scale=0.25
    
}

function draw() {

    background(FundodaDeepWeb);
    if(TomFalso.x - JerryFalso.x < (TomFalso.width - JerryFalso.width)/2) {
        TomFalso.velocityX =0;
        TomFalso.addAnimation("UltimaImagemdoTom",imagemTomdaDeepWeb);
        TomFalso.changeAnimation("UltimaImagemdoTom");
        TomFalso.x =300;
        TomFalso.scale=0.2;
        JerryFalso.addAnimation("UltimaImagemdoJerry",imagemJerrydaDeepWeb)
        JerryFalso.changeAnimation("UltimaImagemdoJerry")
        JerryFalso.scale =0.2


    }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      JerryFalso.addAnimation("Jerry provocando",imagemJerryCopia);
      JerryFalso.changeAnimation("Jerry provocando");
      JerryFalso.frameDelay = 25;
      TomFalso.velocityX = -5;
      TomFalso.addAnimation("TomBosta andando",imagemTomCopia)
      TomFalso.changeAnimation("TomBosta andando")
  }


}
