/**
 * Demo:
 * createImg
 */
import p5 from 'p5';

export const createImg = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ccc');
        const img = p.createImg(
            'https://p5js.org/assets/img/books/learn_javascript.jpg',
            'Learn JavaScript with p5.js'
        );
        //   img.position(0, -10);
    };


    p.draw = () => {

    };
};