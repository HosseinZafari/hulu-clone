import Thumb from "./Thumb"
 
function Results({rows}) {

    return (
        <div className="px-10 my-20 sm:grid md:grid-cols-2
         xl:grid-cols-3  2xl:flex flex-wrap  2xl:justify-evenly">
            {rows.map((value) => <Thumb key={value.id} result={value}/>)}        
        </div>
    )
}

export default Results
