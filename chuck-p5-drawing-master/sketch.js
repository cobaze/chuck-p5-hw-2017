
var positionX = 0;
var positionY = 0;

var greenColor = {
    r:0,
    g:128,
    b:0
}

var redColor = {
    r:255,
    g:0,
    b:0
}

var orangeColor = {
    r:255,
    g:120,
    b:0
}

var blueColor = {
    r:0,
    g:0,
    b:255
}

function setup(){
    createCanvas (1000, 1000);
    background (253,241,202);
    
    positionX = width/2;
    positionY = height/2;
    
}

function draw(){
    
    rectMode(CENTER);
    ellipseMode(CENTER);
    
    // Antenna
    line(500, 400, 500, 200);
    
    // Antenna Ball
    fill(redColor.r, redColor.g, redColor.b)
    ellipse(positionX, positionY - 300, 10, 10);
    
    // Hat
    fill(greenColor.r, greenColor.g, greenColor.b);
    ellipse(positionX, positionY - 200, 50, 50);
    
    // Bottom Red Ball
    fill(redColor.r, redColor.g, redColor.b);
    ellipse(positionX, positionY + 190, 150);
    
    // Left Hand
    fill("white");
    rect(positionX - 100, positionY + 55, 25, 220);
    
    // Left Shoulder
    fill(orangeColor.r, orangeColor.g, orangeColor.b);
    rect(positionX - 100, positionY - 40, 40, 50);
    
    // Right Hand
    fill("white");
    rect(positionX + 100, positionY + 55, 25, 220);
    
    // Right Shoulder
    fill(orangeColor.r, orangeColor.g, orangeColor.b);
    rect(positionX + 100, positionY - 40, 40, 50);
    
    // Outter Body
    fill(blueColor.r, blueColor.g, blueColor.b);
    rect(positionX, positionY + 60, 200, 280);
    
    // Head
    fill(255);
    rect(positionX, positionY, 150, 400);
    
    // Line for head
    line(574, 450, 425, 450);
    
    // Inner Body
    fill(orangeColor.r, orangeColor.g, orangeColor.b);
    rect(positionX, positionY + 60, 150, 280);
    
    // Eyes (Left)
    fill(redColor.r, redColor.g, redColor.b)
    ellipse(positionX - 40, positionY - 130, 50, 50);
    ellipse(positionX - 40, positionY - 130, 45, 45);
    
    // Eyes (Right)
    fill(redColor.r, redColor.g, redColor.b)
    ellipse(positionX + 40, positionY - 130, 50, 50);
    ellipse(positionX + 40, positionY - 130, 45, 45);
    
    // Mouth
    fill("white");
    rect(positionX, positionY - 80, 50, 20);
    
    // Triangle On Head
    fill(orangeColor.r, orangeColor.g, orangeColor.b);
    triangle(positionX, positionY - 150, positionX + 35, 300, positionX - 35, 300);
}




