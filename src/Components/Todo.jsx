import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Todo = () => {
    const[todo,setTodo]=useState([]);
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const fetchTodo=async()=>{
        let res=await axios.get("http://localhost:3333/todo");
        setTodo(res.data);
    }
    useEffect(()=>{
        fetchTodo();
    },[])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={
            title,
            desc,
        };
        let res=await axios.post("http://localhost:3333/todo",data);
        fetchTodo();
        setTitle("");
        setDesc("");
        
    }
    

    const handleDelete=async(id)=>{
        let res=await axios.delete(`http://localhost:3333/todo/${id}`);
        fetchTodo();

    }
    const handleUpdate=async(t)=>{
        const data={
            completed:!t.completed
        }
        let res=await axios.put(`http://localhost:3333/todo/${t._id}`,data);
        fetchTodo();
    }

  return (
    
    <>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Chewy&family=Nabla&display=swap" rel="stylesheet"/>
      <div className="todo">
        <div className="part1">
            <form onSubmit={handleSubmit}>
                <h1>Create To-do</h1>
                <input
                  type="text"
                  placeholder="Enter Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  placeholder="Description..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />

                <button>Add</button>
            </form>
        </div>
        <div className="part2">
            <div className="todo-container">
                {todo.map((t, i) => (
                    <div className={`item ${t.completed?"completed":""}`} key={i}>
                        {t.completed ?(
                        <>
                        <h2><strike>{t.title}</strike> </h2>
                        <p><strike>{t.desc}</strike></p></>
                        ) :( 
                        <>
                        <h2>{t.title}</h2>
                        <p>{t.desc}</p></>
                        )
                        
                      }
                        <div className="action">
                            <button className="b1" onClick={() => handleUpdate(t)}>
                              {t.completed ? (
                                <i className="fa-solid fa-xmark"></i>
                              ) : (
                                <i className="fa-solid fa-check"></i>
                              )}
                            </button>

                            <button className="b2" onClick={()=>handleDelete(t._id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </div>
    </>
  )
}

export default Todo
