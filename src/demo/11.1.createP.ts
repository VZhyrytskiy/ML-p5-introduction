/**
 * Demo:
 * createP,
 * .style, .position
 */
import p5 from 'p5';

export const createP = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ccc');

        const textP = p.createP('this is some text');
        textP.style('font-size', '16px');
        // set absolute position
        // textP.position(10, 0);
    };

    p.draw = () => {

    };
};