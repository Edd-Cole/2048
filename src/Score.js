import { createTime } from "./utils";
const Score = ({moves, time}) => {
    return (
        <section>
            <h3>Moves: {moves * 2} &nbsp;&nbsp;&nbsp;&nbsp; Time: {createTime(time)}</h3>
        </section>
    )
}

export default Score;