import { useEffect, useState } from "react";

const HighScores = () => {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        fetch("localhost:7070/api/scores/")
        .then(({scores}) => {
            setScores(scores);
        })
    }, [])

    return (
        <section className="highScores">
            <table>
                <tr><th>Player</th><th>Highest Tile</th><th>Time</th><th>Score</th></tr>
                {scores.map(score => {
                    return (
                        <tr>
                            <td>{score.name}</td>
                            <td>{score.higest_tile}</td>
                            <td>{score.time}</td>
                            <td>{score.score}</td>
                        </tr>
                    )
                })}
            </table>
        </section>
    )
}

export default HighScores;