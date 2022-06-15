/**
 * Demo:
 * beginShape, endShape, vertex
 */
import p5 from 'p5';

export const beginShapeEndShape = (p: p5) => {
    p.setup = () => {
        p.createCanvas(100, 100);
        p.background(255);

        p.beginShape();
        p.vertex(20, 20);
        p.vertex(80, 20);
        p.vertex(80, 40);
        p.vertex(40, 40);
        p.vertex(40, 60);
        p.vertex(80, 60);
        p.vertex(80, 80);
        p.vertex(20, 80);
        p.endShape(p.CLOSE);
    };

    p.draw = () => {

    };
};