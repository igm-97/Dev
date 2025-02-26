function sketch1(p) {
    p.setup = function() {
        let canvas = p.createCanvas(300, 200);
        canvas.parent(p.currentSketch);
        p.noStroke();
    };

    p.draw = function() {
        p.background(255);
        p.fill(p.mouseX, p.mouseY, 150);
        p.ellipse(p.mouseX, p.mouseY, 50);
    };
}