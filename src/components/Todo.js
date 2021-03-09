import React , {useState} from "react"
import db from "../firebase"
import Todolist from "./Todolist"

function Todo({setTodos,todos,todo})
{
  
    function completeBtnHandler(e)
    {
        db.collection('todos').doc(todo.id).update({
            completed : !todo.completed  
        })

        // db.collection('todos').doc(todo.id).set({
        //     completed : !todo.completed  
        // },{merge : true})

        // setTodos(todos.map(item =>
        //     {
        //         if(item.id === todo.id){
        //             return{
        //                 ...item,
        //                 completed : !todo.completed
        //             }
        //     }
        //     return item
        // }
        // ))
    }

    function deleteBtnHandler(e)
    {
        db.collection('todos').doc(todo.id).delete()
        // setTodos(todos.filter( item=> item.id !== todo.id
        // ))
    }

    return(
        <div className="list-container">
            <li className={`list-item ${todo.completed?"completed":""}`}>{todo.task}</li>
            <button className="complete-btn" onClick = {completeBtnHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick = {deleteBtnHandler}><i className="fas fa-trash"></i></button>
        </div>  
    )
}

export default Todo