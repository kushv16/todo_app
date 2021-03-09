import React from "react"
import Todo from "./Todo"

function Todolist({setTodos,todos,filter})
{
    return(
 
    <div className="todo-container">
        <ul className="todo-list">
        {filter.map(todo =>(
            <Todo setTodos = {setTodos} todos={todos} todo={todo}/>
            ))}
        </ul>    
    </div>
    )
}

export default Todolist