import Grid from "./Grid"

const Game = (props) => {
    const {grid} = props;

    return (
        <section>
            <Grid grid={grid}/>
        </section>
    )
}

export default Game