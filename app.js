const defaultColor = '#333333';
const defaultSize = 16;
const defaultMode = 'color';

let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;


const container = document.body.querySelector('.container');
const resetBtn = document.querySelector('#reset');
const newBtn = document.querySelector('#new');
const colorBtn = document.querySelector('#color');
const sixteenBtn = document.getElementsByName('sixteen');
const thirtyTwoBtn = document.getElementsByName('thirtytwo');
const sixtyFourBtn = document.getElementsByName('sixtyfour');

const setNewColor = (newColor) => {
    currentColor = newColor;
}

const setNewMode = (newMode) => {
    currentMode = newMode;
}

const setNewSize = (newSize) => {
    currentSize = newSize;
}


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


