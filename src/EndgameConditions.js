const EndgameConditions = (grid, moveTiles, moves) => {
    let gameOver = grid.some(row => row.includes(2048));
    
    if(gameOver) {
        document.removeEventListener("keydown", moveTiles)
        return "CONGRATULATIONS, YOU WON & YOU DID IT IN " + moves + " MOVES!";
    }

    let gameOverRow = null;
    let gameOverColumn = null;

   for (let row = 0; row < grid.length; row++) {
        for (let tile = 0; tile < 3; tile ++) {
            if(grid[row][tile] === null || grid[row][tile + 1] === null || grid[row][tile] === grid[row][tile + 1]) {
                gameOverRow = false;
                break;
            }
        }
        if(gameOverRow === false) break;
        if(row === grid.length - 1) {
            gameOverRow = true;
        }
   }  

   for (let column = 0; column < grid.length; column++) {
    for (let tile = 0; tile < 3; tile ++) {
        if(grid[tile][column] === null || grid[tile + 1][column] === null || grid[tile][column] === grid[tile + 1][column]) {
            gameOverColumn = false;
            break;
        }
    }
    if(gameOverColumn === false) break;
    if(column === grid.length - 1) {
        gameOverColumn = true;
    }
}

    if(gameOverRow && gameOverColumn) {
        return "You lost... You only lasted " + moves + " moves :("
    }
}

export default EndgameConditions;