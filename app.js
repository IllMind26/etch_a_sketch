// const container = document.body.querySelector('.container');
const resetBtn = document.querySelector('#reset');
const newBtn = document.querySelector('#new');
const colorBtn = document.querySelector('#color');

function makeGrid(content) {
    let container = content.appendChild(document.createElement('div'));
    container.id = 'main';
    container.classList.add('container');

    for (let i = 0; i < 256; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.classList.add('row');
        row.id = 'row' + i;
        // let box = row.appendChild(document.createElement('div'));
        // box.classList.add('box');
    }

}

makeGrid(document.body)


// const grid = document.createElement('div');
// grid.classList.add('grid-div');
// container.appendChild(grid);
// document.body.append(container);


