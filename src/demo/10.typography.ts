/**
 * Demo:
 * textSize, text
 */
import p5 from 'p5';

export const typography = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ccc');

        p.textSize(12);
        p.text('Font Size 12', 10, 30);
        p.textSize(14);
        p.text('Font Size 14', 10, 60);
        p.textSize(16);
        p.text('Font Size 16', 10, 90);
    };

    p.draw = () => {

    };
};