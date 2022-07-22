import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }){

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title)

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleClickUpdateTodo(e) {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }

        function handleChange(e){
            const value = e.target.value
            setNewValue(value)
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue}></input>
            <button onClick={handleClickUpdateTodo} className="button">Update</button>
        </form>
    }

    function TodoElement() {

        return <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <div>
                    <button onClick={() => setIsEdit(true)} className="editButton">Editar</button>
                    <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Eliminar</button>
                </div>
            </div>
    }
    
    return <div className="todo">
            {isEdit ? <FormEdit /> : <TodoElement/>}
           </div>
}