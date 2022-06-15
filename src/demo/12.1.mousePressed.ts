/**
 * Demo:
 * mousePressed
 */
import p5 from 'p5';

export const mousePressed = (p: p5) => {
    let value: number = 0;

    p.setup = () => {
        p.createCanvas(400, 400);
    };

    p.mousePressed = () => {
        if (value === 0) {
            value = 255;
        } else {
            value = 0;
        }
    };

    p.draw = () => {
        p.fill(value);
        p.rect(25, 25, 50, 50);
    };
};