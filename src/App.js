import './App.css';
import Form from "./components/Form"
import Todolist from "./components/Todolist"
import React ,{useState,useEffect} from "react"
import db from "./firebase"

function App() {
  let [inputText,setInputText] = useState("")
  let [todos,setTodos] = useState([])
  let [status,setStatus] = useState("all")
  let [filter,setFilter] = useState([])

  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({ id:doc.id ,completed : doc.data().completed , task: doc.data().task})))
    })
  },[])

  function filterHandler()
  {
    switch(status){
      case 'completed':
        setFilter(todos.filter(item => item.completed === true))
        break
      case 'uncompleted':
        setFilter(todos.filter(item => item.completed === false))
        break
      default:
        setFilter(todos)
    } 
  }

  useEffect(() =>
    {filterHandler()},[status,todos]
  )

  return (
    <div className="App">
        <header>To-do App</header>
        <Form filter={filter} setFilter={setFilter}setStatus={setStatus} inputText = {inputText} setInputText = {setInputText} todos={todos} setTodos={setTodos}/>
        <Todolist filter={filter}setTodos={setTodos} todos={todos}/>
    </div>
  );

}


export default App;
