import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const TODOS_URL = import.meta.env.VITE_TODOS_API

const Tryedit = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [editTodo, setEditTodo] = useState({
        title: '',
        completed: ''
    })

    // Get first the data
    useEffect(()=> {
        axios(`${TODOS_URL}/${id}`)
        .then((res) => setEditTodo(res.data))
        .catch((err) => console.log(err.response))
    },[])

    // Edit todo
    const handleUpdate = () => {
        axios.put(`${TODOS_URL}/${id}`, editTodo)
        .then((res) => navigate('/'))
        .catch((err) => console.log(err.response))
    }

    return (
    <div>
        <strong>Update Todo</strong>
        <div>
            <input 
                type="text" 
                value={editTodo.title}
                className='border'
                onChange={(e) => setEditTodo({...editTodo, title: e.target.value})}
            />
            <br />
            <input 
                type="text" 
                value={editTodo.completed}
                className='border'
                onChange={(e) => setEditTodo({...editTodo, completed: e.target.value})}
            />
        </div>
        <br />
        <button onClick={handleUpdate} className='bg-green-300 text-green-700 px-3'>Update</button>
        <Link className='bg-blue-300 text-blue-700 px-3 ml-3' to='/'>Back</Link>
    </div>
    )
}

export default Tryedit