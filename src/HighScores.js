import { useEffect, useState } from "react";

const HighScores = ({hit2048}) => {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        fetch("https://edd-2048-backend.herokuapp.com/api/scores?sortBy=score&limit=30")
        .then(response => {
            return response.json();
        })
        .then(({scores}) => {
            setScores(scores);
        })
        .catch(error => {
            console.log(error);
        })
    }, [hit2048])

    return (
        <section className="highScores">
            <table className="highScoresTable">
                <tr>
                <th>Position</th>
                <th>Player</th>
                {/* <th>Highest Tile</th> */}
                <th>Time</th>
                <th>Moves</th>
                </tr>
                {scores.map((score, index) => {
                    return (
                        <tr key={score.id}>
                            <td>{index + 1}</td>
                            <td>{score.name}</td>
                            {/* <td>{score.highest_tile}</td> */}
                            <td>{score.time.slice(0,-3)}</td>
                            <td>{score.score}</td>
                        </tr>
                    )
                })}
            </table>
        </section>
    )
}

export default HighScores;