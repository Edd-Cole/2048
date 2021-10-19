import { useState, useEffect } from "react";
import { startTime } from "./utils";

const NewGame = ({setMoves, setGrid, moveTiles, sethit2048, setTime}) => {
    const [isTiming, setIsTiming] = useState(false);
    const recreateGrid = () => {
        const newTile1 = Math.floor((Math.random()*16));
        const newTile2 = Math.floor((Math.random()*16));
        const twoOrFour1 = Math.random() < 0.75 ? 2 : 4;
        const twoOrFour2 = Math.random() < 0.66 ? 2 : 4; 

        const t1XCoord = Math.floor(newTile1 / 4);
        const t2XCoord = Math.floor(newTile2 / 4);
        const t1YCoord = newTile1 % 4;
        const t2YCoord = newTile2 % 4;

        if(t1XCoord===t2XCoord && t1YCoord===t2YCoord) {
            return recreateGrid
        } else {
        
        const newGrid = setGrid(() => {
            const newGrid = [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ];
            
            newGrid[t1XCoord][t1YCoord] = twoOrFour1;
            newGrid[t2XCoord][t2YCoord] = twoOrFour2;
            return newGrid;
        })
        setMoves(() => {
            return 0;
        })
        return newGrid;
    }}

    useEffect(() => {
        document.addEventListener("keydown", moveTiles)
        return () => {
            document.removeEventListener("keydown", moveTiles)
        }
    })
return (
    <section>
        <button className="newGameButton" onClick={() => {
            sethit2048(false);
            recreateGrid();
            startTime(setTime, isTiming, setIsTiming);
        }}>New Game</button>
    </section>
);
}

export default NewGame;