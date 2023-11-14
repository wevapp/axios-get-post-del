import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // Get the user want to edit
    useEffect(() =>{ 
        axios.get('http://localhost:3000/users/' + id)
        .then(response => {
            setNewUser(response.data) 
        })
        .catch(error => console.log(error.response))
    },[])

    // the value will be the user want to edit, even though you see its empty. ex: John Doe
    // this variable is different from Create.jsx
    const [newUser, setNewUser] = useState({
        name: '',
        age: '',
    })

    // Put the edited user to database using userId with new Value
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/users/' + id, newUser)
        .then((res) => {
            alert(`Updated`);
            navigate('/')
        })
        .catch(error => error.response)
    }

  return (
    <div className='container w-[400px] border text-center'>
        <strong>Update User</strong>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' className='border'
            // value name from user want to edit ex: John Doe
            value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
        </div>
        <div>
            <label htmlFor="age">Age: </label>
            <input type="text" name='age' className='border'
            // value age from John Doe ex: 30
            value={newUser.age} onChange={(e) => setNewUser({...newUser, age: e.target.value})}/>
        </div>
        <div className='my-3 text-white'> 
            <button className='bg-green-500 mr-4 p-1 rounded' onClick={handleUpdate}>Update</button>
            <Link className='bg-blue-500 p-1 rounded' to='/'>Back</Link>
        </div>
    </div>
  )
}

export default Update