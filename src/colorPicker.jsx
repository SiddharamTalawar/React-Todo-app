import React, { useState } from "react"
function ColorPicker() {   
    const [color,setColor] = useState("red")
    const updateColor = (event)=>{
        setColor(event.target.value)
    }
    return(
        <>
        <hr />
         <div className="color-picker-container">
            
            <h1 style={{backgroundColor:color}}>Color Picker <br />{color}</h1>
            <input value={color} type="color" onChange={updateColor} />
        </div>
        </>
       
    )
}
export default ColorPicker