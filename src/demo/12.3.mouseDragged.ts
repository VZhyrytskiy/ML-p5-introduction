/**
 * Demo:
 * mouseDragged
 */
import p5 from 'p5';

export const mouseDragged = (p: p5) => {
    let value: number = 0;

    p.setup = () => {
        p.createCanvas(400, 400);
    };

    p.mouseDragged = () => {
        value = value + 5;
        if (value > 255) {
            value = 0;
        }
    };

    p.draw = () => {
        p.fill(value);
        p.rect(25, 25, 100, 100);
    };
};