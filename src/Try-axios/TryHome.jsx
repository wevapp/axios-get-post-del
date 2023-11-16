import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const TODOS_URL = import.meta.env.VITE_TODOS_API;

const TryHome = () => {
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: '',
        completed: ''
    })

    // Get the Mock api
    useEffect(() => {
        axios(`${TODOS_URL}?_limit=10`)
        .then(res => setTodos(res.data))
        .catch(err => console.log(err.response))
    },[])
  
    // Create new todo
    const handleAdd = (e) => {
        e.preventDefault()
        axios.post(TODOS_URL, newTodo)
        .then((res) => {
            alert('added new task')
            location.reload()
        }).catch((err) => console.log(err.response))
        setNewTodo('')
    }

    // Delete todo
    const handleDelete = (todoId, todoTitle) => {
        const confirm = window.confirm(`Would you like to delete ${todoTitle}`)
        if(confirm){
            axios.delete(`${TODOS_URL}/${todoId}`)
            .then((res) => {
                location.reload()
            }).catch((err) => console.log(err.response))
        }
    }

  return (
    <div>
        <div>
            <input 
                type="text" 
                placeholder='Title'
                className='border'
                onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
            />
            <input 
                type="text" 
                placeholder='Enter true if completed'
                className='border'
                onChange={(e) => setNewTodo({...newTodo, completed: e.target.value})}
            />
            <button
                onClick={handleAdd}
                className='bg-green-300 px-3 ml-3'
            >Add</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Complete?</th>
                    <th>Function</th>
                </tr>
            </thead>
            <tbody>
            {
                todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.id}</td> 
                        <td>{todo.title}</td>
                        <td>{todo.completed ? 'True' : 'False'}</td>
                        <td className='grid grid-cols-3 gap-1 text-center'>
                            <Link to={`/read/${todo.id}`} className='bg-blue-200 text-blue-700 px-2'>Read</Link>
                            <Link to={`/edit/${todo.id}`} className='bg-green-200 text-green-700 px-2'>Edit</Link>
                            <button onClick={(e) => handleDelete(todo.id, todo.title)} className='bg-red-200 text-red-700 px-2'>Del</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default TryHome