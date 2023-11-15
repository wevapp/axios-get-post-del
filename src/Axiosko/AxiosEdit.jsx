import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// Get Local API from dot env
const LOCAL_API = import.meta.env.VITE_LOCAL_API

const AxiosEdit = () => {

    const { id } = useParams()

    // Navigate to list of user to view updated user
    const navigate = useNavigate()

    // Define new variable to stored new value edited user then put
    const [newEditedUser, setNewEditedUser] = useState({
        name: '',
        age: '',
    })

    // First need to get the specific user b4 edit
    useEffect(() => {
        axios.get(`${LOCAL_API}/${id}`)
        .then(response => setNewEditedUser(response.data))
        .catch(error => console.log(error.response))
    },[])

    const handleUpdate = () => {
        axios.put(`${LOCAL_API}/${id}`, newEditedUser)
        .then((response) => {
            alert('Updated User!')
            navigate('/')
        }).catch(error => console.log(error.response))
    }
  return (
    <div>
        <div>
        <strong className=' text-3xl'>Edit User</strong>
        <div>
          <label htmlFor="name">Fullname: </label>
          <input type="text" className='border-2' value={newEditedUser.name}
            onChange={(e) => setNewEditedUser({...newEditedUser, name: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="text" className='border-2 my-2' value={newEditedUser.age}
            onChange={(e) => setNewEditedUser({...newEditedUser, age: e.target.value})}/>
        </div>
        <button className='bg-green-400 p-1 mb-2'
          onClick={handleUpdate}>Update</button>
      </div>
    </div>
  )
}

export default AxiosEdit