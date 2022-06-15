/**
 * Demo:
 * ellipseMode, rectMode
 * RADIUS, CENTER, CORNER, CORNERS
 */
import p5 from 'p5';

export const ellipseModeRectMode = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ccc');

        p.ellipseMode(p.RADIUS);
        p.fill(255);
        p.ellipse(50, 50, 30, 30); // Outer white ellipse

        p.ellipseMode(p.CENTER);
        p.fill(100);
        p.ellipse(50, 50, 30, 30); // Inner gray ellipse


        p.rectMode(p.CORNER);
        p.fill(255);
        p.rect(250, 250, 50, 50); // Draw white rectangle using CORNER mode

        p.rectMode(p.CORNERS);
        p.fill(100);
        p.rect(250, 250, 50, 50); // Draw gray rectangle using CORNERS mode
    };

    p.draw = () => {

    };
};