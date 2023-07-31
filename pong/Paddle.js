class Paddle {
    constructor(x, y, l, w, c, b) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.l = l;
        this.w = w;
        this.c = c;
        this.b = b;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = this.b;
        ctx.fillRect(this.x,this.y, this.w, this.l);
        ctx.strokeRect(this.x,this.y, this.w, this.l);
    }

    move() {
        let newY = this.y +this.vy;
        
        if(newY < 0 ) return;
        if  (newY > boardHeight - this.l){
            return;

        }

        this.y = newY;
    }

    moveCPU(ball) {
        // Use the properties of the ball to set a new velocity
        // Helpful pieces:
        //   Math.min() and Math.max() to limit the velocity
        //   ball.y to see where the ball is
        //   ball.vy to see where the ball is going
        let aiv = Math.abs(ball.vy) + 1;
        if (aiv > 3){
            aiv = 3;
        }
        if (this.y+this.l/2 - 20 < ball.y){
             this.vy = aiv;
        }
        if (this.y+this.l/2 + 20 > ball.y){
            this.vy = -aiv;
       }
        // Modify this line to add your own code

        // Finally, call move to move the paddle normally
        this.move();
    }
}