export const createNewGrid =  (gridLabels) => {
    return gridLabels.map(row => {
        const newRow = [...row];
        return newRow;
    })
}

export const moveTilesRight = (newGrid, movementOfTiles) => {
    for(let row = 0; row < newGrid.length; row++) {
        for(let tile = 3; tile >= 0; tile--) {
            if(newGrid[row][3] === null && newGrid[row][tile] !== null && tile < 3) {
                newGrid[row][3] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[row][2] === null && newGrid[row][tile] !== null  && tile < 2) {
                newGrid[row][2] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[row][1] === null && newGrid[row][tile] !== null  && tile < 1) {
                newGrid[row][1] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else {
                continue;
            }
        }
        if (newGrid[row][3] === newGrid[row][2] && newGrid[row][3] !== null) {
            newGrid[row][3] *= 2;
            newGrid[row][2] = newGrid[row][1];
            newGrid[row][1] = newGrid[row][0];
            newGrid[row][0] = null;
            movementOfTiles++;
        }
        if (newGrid[row][2] === newGrid[row][1] && newGrid[row][2] !== null) {
            newGrid[row][2] *= 2;
            newGrid[row][1] = newGrid[row][0];
            newGrid[row][0] = null;
            movementOfTiles++;
        }
        if (newGrid[row][1] === newGrid[row][0] && newGrid[row][1] !== null) {
            newGrid[row][1] *= 2;
            newGrid[row][0] = null;
            movementOfTiles++;
        }
    }
    return {newGrid, movementOfTiles}
}

export const moveTilesLeft = (newGrid, movementOfTiles) => {
    for(let row = 0; row < newGrid.length; row++) {
        for(let tile = 1; tile <= 3; tile++) {
            if(newGrid[row][0] === null && newGrid[row][tile] !== null && tile > 0) {
                newGrid[row][0] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[row][1] === null && newGrid[row][tile] !== null  && tile > 1) {
                newGrid[row][1] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[row][2] === null && newGrid[row][tile] !== null  && tile > 2) {
                newGrid[row][2] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else {
                continue;
            }
        }
        if (newGrid[row][0] === newGrid[row][1] && newGrid[row][0] !== null) {
            newGrid[row][0] *= 2;
            newGrid[row][1] = newGrid[row][2];
            newGrid[row][2] = newGrid[row][3];
            newGrid[row][3] = null;
            movementOfTiles++;
        }
        if (newGrid[row][1] === newGrid[row][2] && newGrid[row][1] !== null) {
            newGrid[row][1] *= 2;
            newGrid[row][2] = newGrid[row][3];
            newGrid[row][3] = null;
            movementOfTiles++;
        }
        if (newGrid[row][2] === newGrid[row][3] && newGrid[row][2] !== null) {
            newGrid[row][2] *= 2;
            newGrid[row][3] = null;
            movementOfTiles++;
        }
    }
    return {newGrid, movementOfTiles}
}

export const moveTilesDown = (newGrid, movementOfTiles) => {
    for(let tile = 3; tile >= 0; tile--) {
        for(let row = 3; row >= 0; row--) {
            if(newGrid[3][tile] === null && newGrid[row][tile] !== null && row < 3) {
                newGrid[3][tile] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[2][tile] === null && newGrid[row][tile] !== null  && row < 2) {
                newGrid[2][tile] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[1][tile] === null && newGrid[row][tile] !== null  && row < 1) {
                newGrid[1][tile] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else {
                continue;
            }
        }
        if (newGrid[3][tile] === newGrid[2][tile] && newGrid[3][tile] !== null) {
            newGrid[3][tile] *= 2;
            newGrid[2][tile] = newGrid[1][tile];
            newGrid[1][tile] = newGrid[0][tile];
            newGrid[0][tile] = null;
            movementOfTiles++;
        }
        if (newGrid[2][tile] === newGrid[1][tile] && newGrid[2][tile] !== null) {
            newGrid[2][tile] *= 2;
            newGrid[1][tile] = newGrid[0][tile];
            newGrid[0][tile] = null;
            movementOfTiles++;
        }
        if (newGrid[1][tile] === newGrid[0][tile] && newGrid[1][tile] !== null) {
            newGrid[1][tile] *= 2;
            newGrid[0][tile] = null;
            movementOfTiles++;
        }
    }
    return {newGrid, movementOfTiles}
}

export const moveTilesUp = (newGrid, movementOfTiles) => {
    for(let tile = 0; tile <= 3; tile++) {
        for(let row = 0; row <= 3; row++) {
            if(newGrid[0][tile] === null && newGrid[row][tile] !== null && row > 0) {
                newGrid[0][tile] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[1][tile] === null && newGrid[row][tile] !== null  && row > 1) {
                newGrid[1][tile] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else if (newGrid[2][tile] === null && newGrid[row][tile] !== null  && row > 2) {
                newGrid[2][tile] = newGrid[row][tile];
                newGrid[row][tile] = null;
                movementOfTiles++;
            } else {
                continue;
            }
        }
        if (newGrid[0][tile] === newGrid[1][tile] && newGrid[0][tile] !== null) {
            newGrid[0][tile] *= 2;
            newGrid[1][tile] = newGrid[2][tile];
            newGrid[2][tile] = newGrid[3][tile];
            newGrid[3][tile] = null;
            movementOfTiles++
        }
        if (newGrid[1][tile] === newGrid[2][tile] && newGrid[1][tile] !== null) {
            newGrid[1][tile] *= 2;
            newGrid[2][tile] = newGrid[3][tile];
            newGrid[3][tile] = null;
            movementOfTiles++
        }
        if (newGrid[2][tile] === newGrid[3][tile] && newGrid[2][tile] !== null) {
            newGrid[2][tile] *= 2;
            newGrid[3][tile] = null;
            movementOfTiles++
        }
    }
    return {newGrid, movementOfTiles}
}

export const addNewTile = (gridLabels) => {
    const newTile1 = Math.floor((Math.random()*16));
    const twoOrFour = Math.random() < 0.8 ? 2 : 4;

    const t1XCoord = Math.floor(newTile1 / 4);
    const t1YCoord = newTile1 % 4;

    if(gridLabels[t1XCoord][t1YCoord] !== null) {
        return addNewTile(gridLabels);
    } else {
        gridLabels[t1XCoord][t1YCoord] = twoOrFour;
        return gridLabels
    }}

export const checkNoMoreLegalMoves = (gridLabels) => {
    
}

// module.exports = {createNewGrid, moveTilesRight, moveTilesLeft, moveTilesDown, moveTilesUp, addNewTile, checkNoMoreLegalMoves}