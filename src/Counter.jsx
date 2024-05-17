import React,{useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);
    const [estimatedCount,setestimatedCount] = useState(0);
    const changeEstimateCount = (event) => {
        setestimatedCount(event.target.value)
    }
    return(
        <div className="counter" >
            <hr />
            <input value={estimatedCount} type="number" onChange={changeEstimateCount}/>
            <h2>Estimated Count:{estimatedCount}</h2>
            <h1 className="counter-value" >{count}</h1>
            <button className="counter-button" onClick={() => setCount(count - 1)}>Decrment</button>
            <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
            <button className="counter-button" onClick={() => setCount(count + 1)}>Increcrment</button>
        </div>
    )
}
export default Counter