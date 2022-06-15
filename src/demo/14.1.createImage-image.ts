/**
 * Demo:
 * createImage, image, p5.Image
 */
import p5 from 'p5';

export const createImage = (p: p5) => {

    p.setup = () => {
        p.createCanvas(400, 400);

        // create p5.Image object
        let img = p.createImage(66, 66);

        // call this method before manipulation with pixels
        img.loadPixels();
        for (let i = 0; i < img.width; i++) {
            for (let j = 0; j < img.height; j++) {
                img.set(i, j, p.color(0, 90, 102, (i % img.width) * 2));
            }
        }

        // call thia method to update pixels
        img.updatePixels();

        // draw image
        p.image(img, 17, 17);
        p.image(img, 34, 34);
    };
};