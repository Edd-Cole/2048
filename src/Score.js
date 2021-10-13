import { createTime } from "./utils";
const Score = ({moves, time}) => {
    return (
        <section>
            <h3>Moves: {moves}</h3>
            <h3>Time: {createTime(time)}</h3>
        </section>
    )
}

export default Score;