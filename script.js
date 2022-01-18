const gameGrid = document.getElementById('grid');
const rainbowBtn = document.querySelector('#rainbow-btn')

const startsize = 16
let currentSize = startsize 


function makeGrid(size) {
    gameGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gameGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-elements')
        gridElement.innerHTML = i+1
        gridElement.addEventListener('mouseover', changeColor)
        gameGrid.appendChild(gridElement)

        

    }
}

rainbowBtn.onclick = () => makeGrid(currentSize);

function changeColor(e){
  e.target.style.backgroundColor = '#eee'
  console.log(this.innerHTML)
}

// function reloadGrid() {
//   clearGrid()
//   makeGrid(currentSize)
//   }

// function clearGrid() {
//   gameGrid.innerHTML = ''
//   }