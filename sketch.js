let dino;
let oimg;
let cimg;
let bimg;
let pipes = [];
function preload(){
    bimg = loadImage('background_trial.png');
    oimg = loadImage('pipes.png');
    cimg = loadImage('car.png');
}

function setup(){
    createCanvas(800,500);
    dino = new Dino();
}
function keyPressed(){
    if(key == ' '){
        dino.jump();
    }
}
function draw(){
    if(random(1)<0.007){
        pipes.push(new Pipes());
        console.log(pipes);
    }
    background(bimg);
    for (let p of pipes){
        p.move();
        p.show();
    
        if (dino.hits(p)){
            console.log('game over!');
            noLoop();
        }
    
    
    }

    dino.show(); 
    dino.move();
    
}