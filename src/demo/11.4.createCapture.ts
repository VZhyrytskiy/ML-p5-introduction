/**
 * Demo:
 * createCapture, VIDEO
 * image
 * .width, .height
 * filter, INVERT
 */
import p5 from 'p5';

export const createCapture = (p: p5) => {
    let capture;

    p.setup = () => {
        p.createCanvas(400, 400);
        capture = p.createCapture(p.VIDEO);
        capture.hide();
    };

    p.draw = () => {
        p.image(capture, 0, 0, p.width, p.width * capture.height / capture.width);
        // p.filter(p.INVERT);
    };
};