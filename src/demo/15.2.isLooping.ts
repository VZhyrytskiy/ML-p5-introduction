/**
 * Demo:
 * noLoop, loop, isLooping
 * createButton, createCheckbox
 * p5.Element, color, random
 */
import p5 from 'p5';

export const isLooping = (p: p5) => {
    let checkbox: p5.Element, button: p5.Element, colBG: p5.Color, colFill: p5.Color;

    p.setup = () => {
        p.createCanvas(100, 100);

        button = p.createButton('Colorize if loop()');
        button.position(0, 150);
        button.mousePressed(changeBackgroundCallback);

        checkbox = p.createCheckbox('loop()', true);
        (checkbox as any).changed(checkLoopCallback);

        colBG = p.color(0);
        colFill = p.color(255);
    };

    p.draw = () => {
        p.background(colBG);
        p.fill(colFill);
        p.ellipse(p.frameCount % p.width, p.height / 2, 50);
    };

    function changeBackgroundCallback() {
        if (p.isLooping()) {
            colBG = p.color(p.random(255), p.random(255), p.random(255));
            colFill = p.color(p.random(255), p.random(255), p.random(255));
        }
    }

    function checkLoopCallback() {
        if (this.checked()) {
            p.loop();
        } else {
            p.noLoop();
        }
    }
};