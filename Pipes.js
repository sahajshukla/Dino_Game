class Pipes{
    constructor(){
        this.r = 80;
        this.x = width;
        this.y = height-this.r;
    }
    move(){
    this.x -= 20;
    }
    show(){
    image(oimg, this.x, this.y, this.r, this.r);

    }
}