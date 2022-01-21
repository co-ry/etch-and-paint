const gameGrid = document.getElementById('grid');
const rainbowBtn = document.querySelector('#rainbow-btn');
const clearBtn = document.getElementById('clear-btn');
const colorBtn = document.getElementById('color-choice');
const sizeInput = document.getElementById('size-choice')


const startColor = '#000';
const startSize = 40;
const startMode = 'color';
let currentSize = startSize;
let currentColor = startColor;
let currentMode = startMode


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

function setCurrentMode(newMode){
  currentMode = newMode
}

function makeRainbow(){

}



function changeColor(e){
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  }
  else if(currentMode === 'rainbow') {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
  
    setCurrentColor(`rgb(${r}, ${g}, ${b})`)
    e.target.style.backgroundColor = currentColor  
  }
}

function reloadGrid() {
  clearGrid()
  makeGrid(currentSize)
  }

function clearGrid() {
  gameGrid.innerHTML = ''
  }

  rainbowBtn.onclick = () => setCurrentMode('rainbow');
  clearBtn.onclick = () => reloadGrid();  
  colorBtn.onchange = (e) => {
    setCurrentMode('color')
    setCurrentColor(e.target.value)
  };
  sizeInput.onchange = (e) => setCurrentSize(e.target.value);
  window.onload = () => makeGrid(startSize);


  function setCurrentSize(newSize){
    currentSize = newSize
    reloadGrid()
  }

let x = Math.random() * 256
console.log(x)