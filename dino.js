class Dino{
    constructor(){
        this.r = 80;
        this.x = 50;    //x-coordinate
        this.y = height-this.r;    //y-coordinate
        this.vy = 0;
        this.gravity = 2;
    }

    jump(){
        if (this.y==height-this.r){
            this.vy = -35;
        }
        
    }

    hits(pipes){
        return collideRectRect(this.x, this.y, this.r,this.r,pipes.x, pipes.y, pipes.r, pipes.r);
        
    }
    move() {
        this.y += this.vy;
        this.vy+=this.gravity;
        this.y = constrain(this.y, 0, height-this.r);
    }
    show(){
        image(cimg,this.x,this.y,this.r,this.r);
    }
}