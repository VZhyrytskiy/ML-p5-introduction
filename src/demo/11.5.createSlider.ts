/**
 * Demo:
 * createSlider
 * .value()
 * p5.Element
 */
import p5 from 'p5';

export const createSlider = (p: p5) => {
    let slider: p5.Element;

    p.setup = () => {
        p.createCanvas(100, 100);
        p.colorMode(p.HSB);
        slider = p.createSlider(0, 360, 60, 40);
        slider.position(10, 10);
        slider.style('width', '80px');
    };

    p.draw = () => {
        const val = slider.value() as number;
        p.background(val, 100, 100, 1);
    };
};