/**
 * Demo:
 * p5(), setup, draw,
 * createCanvas, background, fill, rect, width, height
 */
import p5 from 'p5';

export const setupDraw = (p: p5) => {
    const x = 100;
    const y = 100;

    p.setup = () => {
        p.createCanvas(600, 400);
    };

    p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(x, y, p.width/2, p.height/2);
    };
};