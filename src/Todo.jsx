import React,{useState} from "react";

function Todo() {
    const [Todos,setTodos] = useState(["jog","have food","save world"])
    // for add todo we can also use onchange event handler to get text and stoe it in new usestate state variable and when button add todo is clicked we can add that new variable to list of todos
    const addTodo = ()=>{
        let newTodo =document.getElementById("add-todo").value
        if(newTodo.trim()!=="")
         {setTodos(t =>[...t,newTodo]) //use updater function and change the previous stateof the object not the current state.
        // console.log(newTodo)
        document.getElementById("add-todo").value =""
    }}

    const deleteTodo =(index)=> {
      let newList =Todos.filter((_,i) =>i!==index) 
      setTodos(newList)

    }
const moveTodoUp= (index)=>{
    if(index>0){
        const copy = [...Todos];
        [copy[index], copy[index-1]] = [copy[index-1], copy[index]];
        setTodos(copy);
    }
    
}
const moveTodoDown= (index)=>{
    if(index<Todos.length-1){const copy = [...Todos];
    [copy[index], copy[index+1]] = [copy[index+1], copy[index]];
    setTodos(copy);}
}
   
    return(
        <div className="todo-container">
            <h1 className="todo-title">Todo List</h1>
            <input placeholder="Enter Todo..." id="add-todo" type="text" />
        <button className="add-todo"onClick={addTodo}>Add Todo</button>
        <ol>
            {Todos.map((Todo,index) => 
    <li className="todo-list" key={index}>
        <span className="todo-list-items">{Todo}</span>
        <button className="delete-button " onClick={()=>deleteTodo(index)}>Delete</button>
        <button className="up-button " onClick={()=>moveTodoUp(index)}>up</button>
        <button className="down-button " onClick={()=>moveTodoDown(index)}>Down</button>
        </li>) }
        </ol>
       
        </div>

    )


}
export default Todo