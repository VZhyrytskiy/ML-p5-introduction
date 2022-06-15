/**
 * Demo:
 * noStroke
 */
import p5 from 'p5';

export const noStroke = (p: p5) => {
    p.setup = () => {
        p.createCanvas(100, 100, p.WEBGL);
    };

    p.draw = () => {
        p.background(0);
        p.noStroke();
        p.fill(240, 150, 150);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(45, 45, 45);
    };
};