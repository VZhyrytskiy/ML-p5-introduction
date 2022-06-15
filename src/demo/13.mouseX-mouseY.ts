/**
 * Demo:
 * mouseX, mouseY
 */
import p5 from 'p5';

export const mouseXmouseY = (p: p5) => {

    p.setup = () => {
        p.createCanvas(400, 400);
    };

    p.draw = () => {
        p.background(244, 248, 252);
        p.line(0, 0, p.mouseX, p.mouseY);
    };
};