class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restititution: 0,
            friction: 1
        }

        this.body = Bodies.circle(x, y, 20, options);
        this.r = 20;
        this.image = loadImage("Plucking mangoes/mango.png");

        World.add(world, this.body)
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       /*  ellipseMode(RADIUS);
        ellipse(0, 0, 20, 20); */
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30)
        pop();

    }
}