function Button(){
    const hideButton = (e) => {e.target.style.display = "none"
        console.log("button clicked and is hidden")}
    // or we can just call the call back fun without argument if we want to handle 
    
    // when using event habdler if we  want to pass arguments to callback fun we need wrap it in arrow function,if directly call the call back fun with argument it will excecuite immediately without happening of  event .
    // event/e is event object which we can access in all events through it we can manuplate it.
    return(
        <button onClick={(e) =>  hideButton(e)} className="button">hide the button</button>
    )
}
export default Button