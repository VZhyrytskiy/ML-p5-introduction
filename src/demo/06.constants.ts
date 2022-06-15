/**
 * Demo:
 * QUARTER_PI, HALF_PI, PI, TWO_PI
 * DEGREES, RADIANS, angleMode
 * arc
 */
import p5 from 'p5';

export const constants = (p: p5) => {
    p.setup = () => {
        p.createCanvas(100, 100);
        p.background('#ccc');

        p.angleMode(p.DEGREES);
        p.angleMode(p.RADIANS);

        p.arc(50, 50, 80, 80, 0, p.QUARTER_PI);
        p.arc(50, 50, 80, 80, 0, p.HALF_PI);
        p.arc(50, 50, 80, 80, 0, p.PI);
        p.arc(50, 50, 80, 80, 0, p.TWO_PI); // or p.TAU
    };

    p.draw = () => {

    };
};