var showButton = [];
var slideShow = [];
var counter = 0;


function preload(){
    slideShow.push(loadImage("images/1.jpg"));
    slideShow.push(loadImage("images/2.jpg"));
    slideShow.push(loadImage("images/3.jpg"));
    slideShow.push(loadImage("images/4.jpg"));
    slideShow.push(loadImage("images/5.jpg"));
    slideShow.push(loadImage("images/6.jpg"));
    slideShow.push(loadImage("images/7.jpg"));

   
}

function setup(){
    createCanvas(500, 500);
    showButton.push(new nextButton(450, 100, 50, color(255, 0, 0)));
    showButton.push(new nextButton(450, 200, 50, color(0, 255, 0)));
}

function draw(){
    noStroke();
    showButton[0].checkButton();
    showButton[0].displayButton();
    showButton[1].checkButton();
    showButton[1].displayButton();
    image(slideShow[counter], 0, 0);
    
     console.log(showButton[0].checkButton());
}

function mousePressed(){
    // I need a loop. But where do i put that loop?
    // Do I need anothwer empty array?
    
    if(showButton[0].displayButton() == true){
        console.log("Red button works");
        counter++;
        
        if(counter == 7){
            counter = 0;
        }
    }
    
    if(showButton[1].displayButton() == true){
        console.log("Green button works");
        counter--;
        
        if(counter == -1){
            counter = 6;
        }
    }
    
//    for (var i = 0; i < targetPosX.length; i++) {
//        if (mouseX > targetPosX[i] - 100 && mouseX < targetPosX[i] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
//            image(pics[i], targetPosX[i], targetPosY);
//            currentPosition = i;
//            console.log(currentPosition);
//
//        } else {
//            fill(0);
//            rect(targetPosX[i], 100, 200, 200);
//
//        }

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