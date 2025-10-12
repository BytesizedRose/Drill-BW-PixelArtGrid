const container = document.querySelector('.container');
const cell = document.querySelector('.cell');
let allPixels = [];
let isDragging = false;

//Dynamically creates 1050 x 55 grid using nested for loops
for (let row = 1; row < 56; row++){
    for (let col = 1; col < 106; col++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `c${col}-r${row}`;
        //cell.textContent = cell.id; /*Not needed, only used to check accuracy of grid*/
        allPixels.push(cell);
        container.appendChild(cell);

        cell.addEventListener('mouseenter', () => {
        if (isDragging) {
            cell.classList.add('black');
        }
        })
    }
}

document.addEventListener('mousedown', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('cell')){
        isDragging = true;
        e.target.classList.add('black');
    }
})

document.addEventListener('mouseup', () => {isDragging = false;})

//Spacebar clears grid back to original state:
window.addEventListener('keydown',(e)=>{
    if (e.key === ' '){
        allPixels.forEach(px => px.classList.remove('black'));
        e.preventDefault();
    }
})