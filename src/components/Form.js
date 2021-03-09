import React,{useState} from "react"
import db from "../firebase";
import firebase from 'firebase'
function Form({inputText,setInputText,todos,setTodos,setStatus})
{
    function inputTextHandler(e)
    {
        setInputText(
            e.target.value
        )
    }

    function submitHandler(e)
    {
        e.preventDefault()
        db.collection('todos').add({
            task:inputText,
            completed:false,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        // setTodos([
        //     ...todos,
        //     {text:inputText,completed:false,id:Math.random()*1000}
        // ]);
        setInputText("")
    }

    function statusHandler(e)
    {
        setStatus(e.target.value)
    }

    return(
        <form>
                <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler}/>
                <button type="submit" className="todo-button" onClick={submitHandler}><i className="far fa-plus-square"></i></button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                      <option value="all">All</option>
                      <option value="completed">Completed</option>
                      <option value="uncompleted">Uncompleted</option>
                    </select>
                  </div>
        </form>
    )
}

export default Form