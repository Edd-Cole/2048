const Grid = (props) => {
    const {grid} = props;
    return (
        <section>
            <table>
                {grid.map(row => {
                    return (<tr>
                        {row.map(tile => 
                        {return (<td><h2>{tile}</h2></td>)}
                        )}</tr>
                )})}    
            </table>
        </section>
    )
}

export default Grid;