// WALL-E

var centerX;
var centerY;

var redColor;
var grayColor;
var lightGray;
var medGray;
var altGray;
var rouge;

var rotateBy = -0.5;

var red, green, blue;

var toggle = false;

function setup(){
    
    createCanvas(500, 500);
    
    centerX = width/2;
    centerY = height/2;
    
    redColor = color(255, 150, 0);
    grayColor = color(90, 90, 90);
    lightGray = color(240, 240, 242);
    medGray = color(208,206,209);
    altGray = color(128,128,128);
    rouge = color(255, 0, 0);

    // TURNING ON WALLE
    var turnWalleOnOne = createP("Use This Button To Turn Walle On");
    turnOn = createButton("ON/OFF");
    turnOn.mousePressed(onWalle);
    turnOn.position(0, 550);
    
    // CHANGING WALLE BODY COLOR
    
    var colorText = createP("Change Body Color Using The RGB Sliders Below");
    var spaceBtwn = createP(" ");
    colorText.position(520, 20);
    spaceBtwn.position(520, 40);
    
    var redText = createP("Red");
    red = createSlider(0, 255, 255);
    red.position(520, 100);
    redText.position(520, 60);
    
    var greenText = createP("Green");
    green = createSlider(0, 255, 150);
    green.position(520, 170);
    greenText.position(520, 130);
    
    var blueText = createP("Blue");
    blue = createSlider(0, 255, 0);
    blue.position(520, 240);
    blueText.position(520, 195);   
}

function draw(){
    
    background (253,241,202);
    rectMode(CENTER);
    ellipseMode(CENTER);
    
    noStroke();
    
    // WALL-E TIRES
    
    // LEFT TIRE
    fill(grayColor);
    rect(centerX - 70, centerY + 50, 50, 70, 15);
    
    // RIGHT TIRE
    fill(grayColor);
    rect(centerX + 70, centerY + 50, 50, 70, 15);
    
    noStroke();
    
    // NECK
    fill(altGray);
    // bottom neck
    rect(centerX, centerY - 70, 30, 30, 5, 5, 0, 0);
    // top neck
    rect(centerX, centerY - 100, 15, 90, 5, 5, 0, 0);

    // LEFT EYE
    stroke(medGray);
    strokeWeight(5);
    push();
    translate(centerX - 45, centerY - 140);
    rotate(rotateBy);
    fill(lightGray);
    rect(5, 6, 75, 50, 50, 0, 50, 50);
    pop();
    
    // PUPIL MOVEMENTS
    var pupilWiggleX = map(mouseX, 0, width, -3, 3);
    var pupilWiggleY = map(mouseY, 0, height, 0, 5);
    
    // LEFT PUPILS
    stroke(grayColor);
    fill(grayColor);
    ellipse(centerX - 35 + pupilWiggleX, centerY - 140 + pupilWiggleY, 30, 30);
    noStroke()
    fill(lightGray);
    ellipse(centerX - 33 + pupilWiggleX, centerY - 137 + pupilWiggleY, 20, 20);
    
    // RIGHT EYE
    stroke(medGray);
    strokeWeight(5);
    push();
    translate(centerX + 45,centerY - 140);
    rotate(-rotateBy);
    fill(lightGray);
    rect(-5, 6, 75, 50, 0, 50, 50, 50);
    pop();
    
    // RIGHT PUPILS
    stroke(grayColor);
    fill(grayColor);
    ellipse(centerX + 35 + pupilWiggleX, centerY - 140 + pupilWiggleY, 30, 30);
    noStroke();
    fill(lightGray);
    ellipse(centerX + 35 + pupilWiggleX, centerY - 137 + pupilWiggleY, 20, 20);
    
    // WALL-E BODY
    fill(red.value(), green.value(), blue.value());
    rect(centerX, centerY, 150, 120, 5, 5, 20, 20);
    
    // TOP SQUARE
    fill(medGray);
    rect(centerX, centerY - 40, 150, 40, 5, 5, 0, 0);
    // inner square
    fill(altGray);
    rect(centerX + 18, centerY - 40, 29, 30, 5, 5, 0, 0);
    fill(rouge);
    rect(centerX - 18, centerY - 40, 29, 30, 5, 5, 0, 0);
    
    // LEFT SQUARE
    fill(medGray);
    rect(centerX - 55, centerY - 48, 40, 55, 20, 0, 0, 0);
    // inner left square
    fill(altGray);
    rect(centerX - 55, centerY - 48, 30, 45, 20, 0, 0, 0);
    
    // RIGHT SQUARE
    fill(medGray);
    rect(centerX + 55, centerY - 48, 40, 55, 0, 20, 0, 0);
    // inner right square
    fill(altGray);
    rect(centerX + 55, centerY - 48, 30, 45, 0, 20, 0, 0);
    
    // BOTTOM GRAY RECTANGLE
    fill(altGray);
    rect(centerX + 30, centerY + 45, 40, 10, 5);
    
    // RED CIRCLE
    fill(rouge);
    ellipse(centerX + 60, centerY + 45, 12); 
}

function onWalle() {
    if (toggle == false) {
        toggle = true;
        rouge = color(108, 253, 48);
        rotateBy = 0;
    } else {
        toggle = false;
        rouge = color(255, 0, 0);
        rotateBy = -0.5;
    }
}