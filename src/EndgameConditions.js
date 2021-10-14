import { createTime, postScore } from "./utils";
import { useState, useEffect } from "react";

const EndgameConditions = (grid, moveTiles, moves, hit2048, sethit2048, time, finalScore, setFinalScore) => {
    const [name, setName] = useState("");
    let gameOver = grid.some(row => row.includes(2048));

    useEffect(() => {
        if(grid.some(row => row.some(num => num >= 2048))) {
            sethit2048(true);
        }
    }, [grid])

    useEffect(() => {
        setFinalScore({time, moves: moves * 2})
    }, [hit2048])
    
    if(gameOver) {
        document.removeEventListener("keydown", moveTiles);
        clearInterval(createTime)
        return (
            <section>
            <p>CONGRATULATIONS, YOU WON AND YOU DID IT IN {moves} MOVES!</p>
            <p>Submit your score:</p>
            <form onSubmit={async(event) => {
                event.preventDefault();
                await postScore(finalScore.moves, finalScore.time, name)
                .then(() => {
                    window.location.reload(true);
                });
            }}>
                <label htmlFor="playerName" />
                <input id="playerName" autoComplete="off" type="text" placeholder="Your Name..." value={name} onChange={(event) => setName(event.target.value)} required></input><br />
                <input type="submit" value="Submit" />
            </form>
            </section>)
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