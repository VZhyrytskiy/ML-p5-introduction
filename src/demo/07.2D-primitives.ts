/**
 * Demo:
 * ellipse, circle, point,
 * createVector
 */
import p5 from 'p5';

export const primitives = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ccc');

        p.ellipse(56, 46, 100, 55);

        p.fill('red');
        p.circle(30, 30, 20);

        p.stroke('purple');
        p.strokeWeight(10);
        p.point(85, 75);
        p.point(30, 75);

        const v = p.createVector(50, 50);
        p.stroke('blue');
        p.point(v);
    };

    p.draw = () => {

    };
};