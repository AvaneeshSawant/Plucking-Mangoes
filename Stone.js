class Stone {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("Plucking Mangoes/stone.png")

        World.add(world, this.body)
    }

    display() {
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(this.body.position.x, this.body.position.y);
       /*  ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius); */
        imageMode(CENTER);
        image(this.image, 0, 0, 55, 55)
        pop();

    }
}