/**
 * Demo:
 * strokeWeight, line
 */
import p5 from 'p5';

export const strokeWeight = (p: p5) => {
    p.setup = () => {
        p.createCanvas(100, 100);
    };

    p.draw = () => {
        p.background('#CCC');
        p.strokeWeight(1);
        p.line(20, 20, 80, 20);
        p.strokeWeight(4);
        p.line(20, 40, 80, 40);
        p.strokeWeight(10);
        p.line(20, 60, 80, 60);
    };
};