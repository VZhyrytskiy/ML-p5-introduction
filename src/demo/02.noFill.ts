/**
 * Demo:
 * createCanvas(WEBGL),
 * noFill, stroke,
 * rotateX, rotateY,
 * box
 */
import p5 from 'p5';

export const noFill = (p: p5) => {
    p.setup = () => {
        p.createCanvas(100, 100, p.WEBGL);
    };

    p.draw = () => {
        p.background(0);
        p.noFill();
        p.stroke(100, 100, 240);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(45, 45, 45);
    };
};