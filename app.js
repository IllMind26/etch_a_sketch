const container = document.body.querySelector('.container');
const resetBtn = document.querySelector('#reset');
const newBtn = document.querySelector('#new');
const colorBtn = document.querySelector('#color');

const grid = document.createElement('div');
grid.classList.add('grids');
container.appendChild(grid);
document.body.append(container);
