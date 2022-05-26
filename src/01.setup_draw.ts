import p5 from 'p5';

export const sketch = (p: p5) => {
    const x = 100;
    const y = 100;

    p.setup = () => {
        p.createCanvas(600, 400);
    };

    p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
    };
};