// const container = document.body.querySelector('.container');
const resetBtn = document.querySelector('#reset');
const newBtn = document.querySelector('#new');
const colorBtn = document.querySelector('#color');

function makeGrid(content) {
    let container = content.appendChild(document.createElement('div'));
    container.id = 'main';
    container.classList.add('container');

    for (let i = 0; i < 16; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.classList.add('row');
        row.id = 'row' + i;
        for (let j = 0; j < 16; j++) {
            let box = row.appendChild(document.createElement('div'));
            box.classList.add('box');

        }
    }

}

makeGrid(document.body)


// const grid = document.createElement('div');
// grid.classList.add('grid-div');
// container.appendChild(grid);
// document.body.append(container);


