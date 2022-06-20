import { useState } from "react";

const Todo = () => {
    const [ todo, setTodo ] = useState([])
    const [ todoText, setTodoText ] = useState("")

    const handleTodoInputChange = (e) => {
        setTodoText(e.target.value)
    }

    const addToList = (e) => {
        // let tempTodo = todo;
        // tempTodo.push(todoText)
        console.log(setTodo([...todo, todoText]));
        // setTodo( [...tempTodo ]);
        // setTodoText("")
        console.log(todo)
    }

    const removeFromList = () => {

    }

    return (
        <>
            <h1>Todo List <button onClick={addToList}>Add</button></h1>
            <input type="text" value={todoText} onChange={handleTodoInputChange} placeholder="Add Todo here"/>
            <ul>
                { todo.map( (e, index) => { return <><li key={index+e}>{e}</li><button key={index+e+"button"} onClick={() => removeFromList(e)}>Remove</button></> } ) }
            </ul>
        </>
    )
}

export default Todo;