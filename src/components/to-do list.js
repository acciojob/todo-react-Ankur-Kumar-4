
import React,{useState} from "react";

const Todo = ()=>{

    const [todo,setTodo] = useState("");
    const [TodoList,setTodoList] = useState([]);


    const addTodo = ()=>{

        if (todo.trim() !== "") {
            setTodoList((prevTodos) => [...prevTodos, todo]);
            setTodo("");
        }
    }


    const deleteItem =(index) =>{
        const updatedTodoList = [...TodoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
     
    }

    return(

        <div className="main">

           <center> <h2>To-Do List</h2></center>


            <div>  
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" />
            <button onClick={addTodo}>Add Todo</button>
            </div> 


            

            {TodoList.map((todoItem, index) => (
             <ul key={index}>{todoItem} <button onClick={()=>deleteItem(index)} className="delete">Delete</button></ul>
            ))}
                
                
        </div>
       

        

       
    )

}

export default  Todo