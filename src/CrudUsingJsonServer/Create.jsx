import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => { 

    const nameRef = useRef()
    const ageRef = useRef()

    // Handle the user input from text field
    const [newUser, setNewUser] = useState({
        name: '',
        age: '',
    }) 

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/users', newUser)
        .then((res) => {
            alert(`Successfully added`);
            navigate('/')
        })
        .catch(error => error.response)

        nameRef.current.value = ''
        ageRef.current.value = ''
    }
  return (
    <div className='container w-[400px] border text-center'>
        <strong>Add User</strong>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' className='border' ref={nameRef}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
        </div>
        <div>
            <label htmlFor="age">Age: </label>
            <input type="text" name='age' className='border' ref={ageRef}
            onChange={(e) => setNewUser({...newUser, age: e.target.value})}/>
        </div>
        <div className='my-3 text-white'> 
            <button className='bg-green-500 mr-4 p-1 rounded' onClick={handleSubmit}>Submit</button>
            <Link className='bg-blue-500 p-1 rounded' to='/'>Back</Link>
        </div>
    </div>
  )
}

export default Create