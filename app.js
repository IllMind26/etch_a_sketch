const container = document.body.querySelector('.container');
const resetBtn = document.querySelector('#reset');
const newBtn = document.querySelector('#new');
const colorBtn = document.querySelector('#color');

function makeGrid(size) {
    let container = document.querySelector('.container');
    container.id = 'main';
    container.classList.add('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr);`

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div')
        div.classList.add('row');
        container.insertAdjacentElement('beforeend', div);
    }

}

makeGrid(16)




