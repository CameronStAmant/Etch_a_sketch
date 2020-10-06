let btn = document.createElement('button');
btn.style.margin = '10px 10px 10px 10px';
btn.innerHTML = 'Reset';
btn.id ='button';

gridSize = 2;
var gridCount = document.body.style;
gridCount.setProperty('--a', gridSize);

document.body.appendChild(btn);
let getBtn = document.getElementById('button');
getBtn.addEventListener('click', () => {
  gridSize = parseInt(prompt('Grid size?'));
  // gridSize *= gridSize;
  clearGrid();
  grid();
});

const getDiv = document.body;
const div = document.createElement('div');
div.id = 'container';
div.className = 'flex-container';

getDiv.appendChild(div);

const getInnerDiv = document.getElementById('container');
let a = 0;

function grid () {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let i = document.createElement('div');
    a++;
    i.id = 'a';
    gridCount.setProperty('--a', gridSize);
    getInnerDiv.appendChild(i);
    
  }
}

grid();

getInnerDiv.addEventListener('mouseover', function(e) {
  e.target.style.background = 'brown';
})

function clearGrid () {
  getInnerDiv.innerHTML = '';
  getInnerDiv.background = 'white';
}