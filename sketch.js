var myImage;

function preload(){
    myImage = loadImage("images/sea.jpg"); // donde adjunto link de imagen?
}


function setup() {
   createCanvas(windowWidth,windowHeight);
    
//    myImage.filter("gray");
//    myImage.filter("invert");
//    myImage.filter("threshold",0,35);
//    myImage.filter("posterize",2);
    myImage.filter("blur",25)

   // background(200);
    //the image to display | x position | y position | width | height
    
    

} 

function draw() {
    imageMode(CENTER);
    image(myImage,width/2,height/2,800,600);
    translate(0, -1*(height/17));  
    textFont('Barrio')
    fill(255)
    textSize(height/3)
    textAlign(CENTER)
    text(hour(),width/2,height/3)
    textSize(height/3)
    textAlign(CENTER)
    text(minute(),width/2,height/3*2)
    textSize(height/3)
    textAlign(CENTER)
    text(second(),width/2,height/3*3)
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}