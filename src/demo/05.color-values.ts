/**
 * Demo:
 * color values,
 * colorMode, HSB, RGB, color
 * mousePressed
 */
import p5 from 'p5';

export const colorValues = (p: p5) => {
    let counter = 0;

    p.setup = () => {
        p.createCanvas(100, 100);
        p.background(0);
    };

    p.mousePressed = () => {
        counter++;

        switch (counter) {
            case 1:
                // Grayscale integer value
                p.background(51);
                break;
            case 2:
                // R, G & B integer values
                p.background(255, 204, 0);
                break;
            case 3:
                // p5 Color object
                p.background(p.color(0, 0, 255));
                break;
            case 4:
                // Named SVG/CSS color string
                p.background('red');
                break;
            case 5:
                // three-digit hexadecimal RGB notation
                p.background('#fae');
                break;
            case 6:
                // six-digit hexadecimal RGB notation
                p.background('#222222');
                break;
            case 7:
                // integer RGB notation
                p.background('rgb(0,255,0)');
                break;
            case 8:
                // integer RGBA notation ?
                p.background('rgba(0, 255, 0, 0.25)');
                break;
            case 9:
                // percentage RGB notation
                p.background('rgb(100%,0%,10%)');
                break;
            case 10:
                // percentage RGBA notation
                p.colorMode(p.RGB);
                p.background('rgba(100%,0%,100%,0.5)');
                break;
            case 11:
                // H, S & B integer values
                p.colorMode(p.HSB);
                p.background(255, 204, 100);
                break;
        }
    };

    p.draw = () => {

    };
};