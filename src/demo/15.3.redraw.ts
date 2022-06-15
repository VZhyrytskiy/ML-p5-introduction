/**
 * Demo:
 * redraw, noLoop
 * mousePressed
 */
import p5 from 'p5';

export const redraw = (p: p5) => {
    let x = 0;

    p.setup = () => {
        p.createCanvas(100, 100);
        p.noLoop();
    };

    p.draw = () => {
        p.background(204);
        p.line(x, 0, x, p.height);
    };

    p.mousePressed = () => {
        x += 1;
        p.redraw();
    };
};