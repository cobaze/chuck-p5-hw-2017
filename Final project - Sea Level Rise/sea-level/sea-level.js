
var waves;
var mound;
var cloud;
var bg;
var waveX = 0;
var waveSpeed = 0.5;
var rise = 0;
var showButton = [];
var buildings;
var message;
var messageTwo;
var x = 215;
var y = 100;
var slider;
var brick;
var block = 0;
var curWallHeight = 0;


function setup(){
    
    showButton.push(new nextButton(880, 350, 50, color(255, 0, 0)));
    showButton.push(new nextButton(880, 250, 50, color(0, 255, 0)));
    
    createCanvas(1000, 600);
    waves = loadImage("images/waves.png"); 
    mound = loadImage("images/mound.png");
    bg = loadImage("images/bg.png");
    buildings = loadImage("images/buildings.png");
    brick = loadImage("images/brick.png");
    cloud = loadImage("images/cloud.png");
    slider = createSlider(0, 255, 0);
    slider.position(830, 100);
}

function draw(){
    var sliderMap = map(slider.value(), 0,255, 255,0);
    console.log("sliderMap: " + sliderMap);
    noStroke();
    tint(255);
    background(bg);
    tint(255, 255)
    image(waves, waveX - 50 * 1.5, 280 + rise); //back wave
    image(waves, waveX * 0.5, 250 + rise, 900, 700); // front wave
    
    image(mound, 0, 390, 800, 300);
    
    image(buildings, 605, 250, 200, 150);
    
    if(waveX > 10){
        waveSpeed = -0.5
    }
    
    if(waveX < -20){
        waveSpeed = 0.5
    }
    
    waveX = waveX + waveSpeed
    
    fill(255);
    rect(800, 0, 200, 600);
    
    showButton[0].checkButton();
    showButton[0].displayButton();
    showButton[1].checkButton();
    showButton[1].displayButton();
    fill(0)
    textSize(12);
    
    message = "Use this slider to see how the diminishing of the ozone layer affects sea level rising."
    
    text(message, 820, 20, 200, 100);
    
    messageTwo= "Use these buttons to build barries to protect the building. Green to increase barrier, red to decrease barrier."
    
    text(messageTwo, 820, 150, 200, 100);
    
//    if(keyIsPressed){
//        if(keyCode == LEFT_ARROW){
//            x--;
//            
//        } else if (keyCode == RIGHT_ARROW){
//            x++;
//        } else if(keyCode == UP_ARROW){
//            y--;
//        } else if(keyCode == DOWN_ARROW){
//            y++;
//        }
//    }
    for(var i =0; i < block; i++){
//        rect(width/1.8, 380 - (i * 20), 20, 20);
        image(brick, width/1.8, 380 - (i * 20), 20, 20);
    }
    
    curWallHeight =  400 - (block * 20);
    
//    fill(255,255,255,slider.value());
//    rect(20, 100, 800,20);
    tint(sliderMap);
    image(cloud, 0, 0);
    
    if(slider.value() < 200){
       rise = rise - 1;
       }
    
    if(abs(rise) > curWallHeight -200){
       console.log("you are under water");
       }
 
}

function mousePressed(){
    
    if(showButton[0].checkButton() == true){
        console.log("Works");
         block++;
        
        if(block >= 10){
           block = 10;
           }
    }
    
    if(showButton[1].checkButton() == true){
        block--;
        console.log("Works Too");
        if(block <= -1){
           block = 0;
           }
    }
//    block++;
    console.log(block);
}

function nextButton(buttonX, buttonY, buttonSize, buttonColor){
    this.x = buttonX;
    this.y = buttonY;
    this.buttonSize = buttonSize;
    this.buttonFill = buttonColor;
    
    this.displayButton = function(){
        fill(this.buttonFill);
        rect(this.x, this.y, this.buttonSize, this.buttonSize);
    }
    
    this.checkButton = function(){
        if(mouseX > this.x && mouseX < (this.x + this.buttonSize) && mouseY > this.y && mouseY < (this.y + this.buttonSize)){
//            console.log("Button Is Displaying");
            return true
        } else {
//            console.log("Button Is Not Displaying");
            return false
        }
    }
}