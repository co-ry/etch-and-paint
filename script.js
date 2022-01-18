const gameGrid = document.getElementById('grid');
const rainbowBtn = document.querySelector('#rainbow-btn');
const eraseBtn = document.getElementById('erase-btn');
const colorBtn = document.getElementById('color-choice');


const startColor = '#000';
const startSize = 16;
let currentSize = startSize;
let currentColor = startColor;


function makeGrid(size) {
    gameGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gameGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-elements')
        gridElement.innerHTML = '.'
        gridElement.addEventListener('mouseover', changeColor)
        gameGrid.appendChild(gridElement)

        

    }
}


function setCurrentColor(newColor){
   currentColor = newColor
}

function changeColor(e){
  e.target.style.backgroundColor = currentColor
}

function reloadGrid() {
  clearGrid()
  makeGrid(currentSize)
  }

function clearGrid() {
  gameGrid.innerHTML = ''
  }

  rainbowBtn.onclick = () => makeGrid(currentSize);
  eraseBtn.onclick = () => reloadGrid();  
  colorBtn.onchange = (e) => setCurrentColor(e.target.value)