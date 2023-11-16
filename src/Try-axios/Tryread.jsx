import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TODOS_URL = import.meta.env.VITE_TODOS_API

const Tryread = () => {
    const { id } = useParams()
    const [sepcificTodo, setSpecificTodo] = useState([])
    
    // Read 
    useEffect(()=> {
        axios(`${TODOS_URL}/${id}`)
        .then((res) => setSpecificTodo(res.data))
        .catch((err) => console.log(err.response))
    },[])

  return (
    <div>
        <strong>Read Todo</strong>
        <ul>
            <li>{sepcificTodo.title}</li>
            <li>{sepcificTodo.completed ? 'True' : 'False'}</li>
            <div className='mt-4'>
                <Link to={`/edit/${sepcificTodo.id}`} className='bg-green-300 text-green-700 px-3 mr-3'>Edit</Link>
                <Link className='bg-blue-300 text-blue-700 px-3' to='/'>Back</Link>
            </div>
        </ul>
    </div>
  )
}

export default Tryread