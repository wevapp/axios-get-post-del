import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    const { id } = useParams()
    
    //  This variable is defferent from home.jsx
    const [users, setUsers] = useState([])
    
    useEffect(() =>{
        axios.get('http://localhost:3000/users/' + id)
        .then(response => setUsers(response.data))
        .catch(error => console.log(error.response))
    },[])

  return (
    <div>
        <strong>User details</strong>
        <div>
            ID: {users.id}
        </div>
        <div>
            Name: {users.name}
        </div>
        <div className='text-slate-200'>
            <Link className='bg-orange-500 px-2 rounded' to={`/update/${users.id}`}>Edit</Link>
            <Link className='bg-blue-500 px-2 rounded ml-2' to='/'>Back</Link>
        </div>
    </div>
  )
}

export default Read