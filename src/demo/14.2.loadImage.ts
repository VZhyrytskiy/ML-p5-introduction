/**
 * Demo:
 * loadImage, image, p5.Image,
 * preload
 */
import p5 from 'p5';

export const loadImage = (p: p5) => {
    let img: p5.Image;

    p.preload = () => {
        img = p.loadImage('./assets/fun.png');
    };

    p.setup = () => {
        p.createCanvas(500, 500);
        p.image(img, 0, 0);
    };
};