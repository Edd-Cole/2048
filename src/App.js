import './App.css';
import { useState } from "react"
import Header from "./Header";
import Score from "./Score"
import Game from "./Game"
import NewGame from "./NewGame"
import EndgameConditions from './EndgameConditions';
import { createNewGrid, moveTilesRight, moveTilesLeft, moveTilesDown, moveTilesUp, addNewTile } from './utils';

function App() {
    const [grid, setGrid] = useState([
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ])

    const [moves, setMoves] = useState(0)

    const moveTiles = (event) => {
        if (event.which === 39) { //Right Move
            setGrid(() => {
                const newGrid = createNewGrid(grid)
                const moveRight = moveTilesRight(newGrid, 0)
                if (moveRight.movementOfTiles > 0) {
                    addNewTile(moveRight.newGrid)
                    setMoves((totalMoves) => {
                        return (totalMoves + 0.5);
                    })
                }
                return moveRight.newGrid;
            })
        } else if (event.which === 37) { //Left move
            setGrid(() => {
                const newGrid = createNewGrid(grid)
                const moveLeft = moveTilesLeft(newGrid, 0)
                if (moveLeft.movementOfTiles > 0) {
                    addNewTile(moveLeft.newGrid)
                    setMoves((totalMoves) => {
                        return (totalMoves + 0.5);
                    })
                }
                return moveLeft.newGrid;
            })
        } else if (event.which === 40) { //Down move
            setGrid(() => {
                const newGrid = createNewGrid(grid)
                const moveDown = moveTilesDown(newGrid, 0);
                if (moveDown.movementOfTiles > 0) {
                    addNewTile(moveDown.newGrid)
                    setMoves((totalMoves) => {
                        return (totalMoves + 0.5);
                    })
                }
                return moveDown.newGrid;
            })
        } else if (event.which === 38) { //Up move
            setGrid(() => {
                const newGrid = createNewGrid(grid)
                const moveUp = moveTilesUp(newGrid, 0);
                if (moveUp.movementOfTiles > 0) {
                    addNewTile(moveUp.newGrid)
                    setMoves((totalMoves) => {
                        return (totalMoves + 0.5);
                    })
                }
                return moveUp.newGrid;
            })
        }
        // else {
        //     setGrid([
        //         [2, 4, 8, 16],
        //         [32, 64, 128, 256],
        //         [512, 1024, 512, null],
        //         [null, null, null, null]
        //     ])
        // }
    }

    const end = EndgameConditions(grid, moveTiles, moves);

    return ( < div className = "App" >
        <
        Header / >
        <
        Score moves = { moves }
        /> <
        h2 > { end } < /h2> <
        Game grid = { grid }
        /> <
        NewGame setMoves = { setMoves }
        setGrid = { setGrid }
        moveTiles = { moveTiles }
        /> <
        /div>
    );
}

export default App;