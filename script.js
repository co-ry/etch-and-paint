const gameGrid = document.getElementById('grid');
const rainbowBtn = document.querySelector('#rainbow-btn');
const clearBtn = document.getElementById('clear-btn');
const colorBtn = document.getElementById('color-choice');
const sizeInput = document.getElementById('size-choice')


const startColor = '#000';
const startSize = 40;
let currentSize = startSize;
let currentColor = startColor;


function makeGrid(size) {
    gameGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gameGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-elements')
        gridElement.addEventListener('mouseover', changeColor)
        gameGrid.appendChild(gridElement)    
    }
}


function setCurrentColor(newColor){
  currentColor = newColor
}


function changeColor(e){
  e.target.style.backgroundColor = currentColor
// Ok make this work inside this function 
  function makeRainbow(){
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)

    setCurrentColor(`rgb(${r}, ${g}, ${b})`)



  }

}

function reloadGrid() {
  clearGrid()
  makeGrid(currentSize)
  }

function clearGrid() {
  gameGrid.innerHTML = ''
  }
// This needs to be wired
  // rainbowBtn.onclick = () => makeRainbow();
  clearBtn.onclick = () => reloadGrid();  
  colorBtn.onchange = (e) => setCurrentColor(e.target.value);
  sizeInput.onchange = (e) => setCurrentSize(e.target.value);
  window.onload = () => makeGrid(startSize);


  function setCurrentSize(newSize){
    currentSize = newSize
    reloadGrid()
  }

