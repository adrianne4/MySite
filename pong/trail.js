class Trail {
    constructor(x, y, r, o) {
        this.x = x;
        this.y = y;
     
        this.r = r;
       // this.c = c;
    }

    draw(ctx) {
        ctx.globalAlpha = 0.15;
        if (this.x<boardWidth/2){
            this.c = 'hotpink';
            ctx.strokeStyle = "hotpink";

        } else {
            this.c ='darkgray';
            ctx.strokeStyle = "darkgray";
        }
        ctx.fillStyle = this.c;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    



}