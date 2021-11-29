import Thumb from "./Thumb"
import FlipMove from "react-flip-move"

function Results({rows}) {

    return (
        <FlipMove className="px-10 my-20 sm:grid md:grid-cols-2
         xl:grid-cols-3  2xl:flex flex-wrap  2xl:justify-evenly">
            {rows.map((value) => <Thumb key={value.id} result={value}/>)}        
        </FlipMove>
    )
}

export default Results
