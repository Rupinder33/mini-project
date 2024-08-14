const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const boardState = Array(cells.length).fill(null);

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.dataset.index;
        if (boardState[index] === null) {
            boardState[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWin()) {
                document.getElementById('status').textContent=`player ${currentPlayer} win!`;
            }
             else if (boardState.every(cell => cell !== null)) {
                document.getElementById('status').textContent=`game is draw`;
    
            }
             else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                document.getElementById('status').textContent=`player ${currentPlayer} turns `;
            }
        }
    });
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2,5,8],
        [0, 4, 8], [2, 4, 6]            
    ];
   for(let i=0;i<winPatterns.length;i++){
        const [a,b,c]=winPatterns[i];
        if(cells[a].textContent==currentPlayer && cells[b].textContent==currentPlayer  && cells[c].textContent===currentPlayer){
            return true;
        }
    }
    return false;
}

function resetGame() {
    boardState.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
