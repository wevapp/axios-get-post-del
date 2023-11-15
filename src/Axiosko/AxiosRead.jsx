import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Get Local API from dot env
const LOCAL_API = import.meta.env.VITE_LOCAL_API

const AxiosRead = () => {
    
    const { id } = useParams()

    const [readUser, setReadUser] = useState([])

    // Need to get First before read the data
    useEffect(() => {
        axios.get(`${LOCAL_API}/${id}`)
        .then(response => setReadUser(response.data))
        .catch(error => console.log(error.response))
    },[])

  return (
    <div className='border'>
        <strong className='text-3xl'>Read User</strong>
        <ul>
            <li>Name of user: {readUser.name}</li>
            <li>User age: {readUser.age}</li>
            <li className='my-4'>
                <Link to={`/edit/${readUser.id}`} className='bg-green-200 text-green-700 text-center px-3'>Edit</Link>
                <Link to='/' className='bg-blue-200 text-blue-700 text-center px-3 ml-2'>Back</Link>
            </li>
        </ul>
    </div>
  )
}

export default AxiosRead