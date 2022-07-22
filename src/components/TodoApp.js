import { useState } from "react";
import Todo from "./todo";
import { AiFillGithub, FaGithub } from 'react-icons/fa'

import "./todoApp.css"

export default function TodoApp() {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([])
    const [allow, setAllow] = useState(false);

    function handleClick(e) {
        e.preventDefault();
    }

    function handleChange(event) {
        const value = event.target.value

        if(value.length > 0) {
            setTitle(value);
            setAllow(true)
            
        }

        else {
            setAllow(false)
        }

    }

    function handleSubmit(evento) {
        if (allow === true) {
            evento.preventDefault()

            const newTodo = {
                id: crypto.randomUUID(),
                title: title,
                completed: false
             }
    
            // Agregamos los anteriores todos y el nuevo lo incorporamos al array
            setTodos([...todos, newTodo])
    
            setTitle("")

            setAllow(false)
        }

        else if (allow === false) {
            evento.preventDefault()
            alert("Ingresa una tarea")
        }
    }

    function handleUpdate(id ,value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id)
        item.title = value;
        setTodos(temp)
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);

        setTodos(temp)
    }

    return (
        <div>
            <div className="todoContainer">
                <h1>Task Manager</h1>
                <form className="todoCreateForm" onSubmit={handleSubmit}>
                    <input className="todoInput" onChange={handleChange} value={title} />
                    <input
                        onClick={handleSubmit}
                        type="submit"
                        value="Crear"
                        className="buttonCreate">
                    </input>

                </form>

                <div className="todosContainer">
                    {
                        todos.map(item => (
                            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
                        ))
                    }
                </div>


            </div>
            <footer className="footer">
                <p>Developed by <b>TotoSB</b></p>
                <a href="https://google.com" className="github_a"> < FaGithub className="github" /> </a>
            </footer>
        </div>

    )
}