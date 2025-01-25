import { useState } from "react"
import  "./css/ToDoList.css";

function ToDoList(){
    const [task,setTask]=useState([]);
    const [newTask, setNewTask]=useState();

    function handlInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){

        if(newTask.trim()!==""){
            setTask(t=>([...t,newTask]));
            setNewTask("");
        }
        else{
            alert("🤔...write something to add")
        }

    }
    function deleteTask(index){

        const updatedTasks=task.filter((_, i)=> i!==index)
        setTask(updatedTasks);


    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }

    }
    function moveTaskDwon(index){
        
        if(index< task.length-1){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }

    }

    return(<>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input 
                type="text" 
                placeholder="enter a task.." 
                value={newTask}
                onChange={handlInputChange}
                ></input>
            <button className="add-button" onClick={addTask}>ADD</button>

        </div>
        <ol>
            {task.map((t,index)=>
            <li key={index}>
                <span className="text">{t}</span>
                <button 
                className="delete-button" 
                onClick={()=>deleteTask(index)}>
                    Delete</button>

                    <button 
                className="move-button" 
                onClick={()=>moveTaskUp(index)}>
                    ⬆️</button>

                    <button 
                className="move-button" 
                onClick={()=>moveTaskDwon(index)}>
                    ⬇️</button>


            </li>)}
            
        </ol>

    </>)
}
export default ToDoList;