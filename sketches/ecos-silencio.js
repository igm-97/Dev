function sketch2(p) {
    p.setup = function() {
        let canvas = p.createCanvas(300, 200);
        canvas.parent(p.currentSketch);
        p.strokeWeight(2);
    };

    p.draw = function() {
        p.background(255);
        for (let i = 0; i < p.width; i += 20) {
            p.line(i, 0, p.mouseX, p.mouseY);
        }
    };
}