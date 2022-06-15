/**
 * Demo:
 * noLoop, loop
 * width, height
 * mousePressed, mouseReleased
 */
import p5 from 'p5';

export const noLoopLoop = (p: p5) => {
    let x = 0;

    p.setup = () => {
        p.createCanvas(100, 100);
    };

    p.draw = () => {
        p.background(204);
        x = x + 0.1;
        if (x > p.width) {
            x = 0;
        }
        p.line(x, 0, x, p.height);
    };

    p.mousePressed = () => {
        p.noLoop();
    };

    p.mouseReleased = () => {
        p.loop();
    };
};