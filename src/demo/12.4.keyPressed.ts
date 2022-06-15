/**
 * Demo:
 * keyPressed
 */
import p5 from 'p5';

export const keyPressed = (p: p5) => {
    let value: number = 0;

    p.setup = () => {
        p.createCanvas(400, 400);
    };

    p.keyPressed = () => {
        if (p.keyCode === p.LEFT_ARROW) {
            value = 255;
        } else if (p.keyCode === p.RIGHT_ARROW) {
            value = 0;
        }
    };

    p.draw = () => {
        p.fill(value);
        p.rect(25, 25, 100, 100);
    };
};