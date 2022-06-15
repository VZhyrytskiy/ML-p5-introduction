/**
 * Demo:
 * createButton
 * .position, .mousePressed
 * random
 */
import p5 from 'p5';

export const createButton = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ccc');
        const button = p.createButton('click me');
        button.position(20, 420);
        button.mousePressed(changeBG);
    };

    const changeBG = () => {
        p.background(p.random(255), p.random(255), p.random(255));
    };

    p.draw = () => {

    };
};