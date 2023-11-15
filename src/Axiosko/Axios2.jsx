import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Get Local API from dot env
const LOCAL_API = import.meta.env.VITE_LOCAL_API

const Axios2 = () => {
  
  const inputRef = useRef()

  // Variable to handle data from api
  const [listUsers, setListUsers] = useState([])

  const [newUser, setNewUser] = useState({
    name: '',
    age: '',
  })

  // Get data from api
  useEffect(() => {
      axios.get(LOCAL_API)
      .then(response => setListUsers(response.data))
      .catch(error => console.log(error.response))
  },[])

  // Post/Create new user
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(LOCAL_API, newUser)
    .then((response) => {
      location.reload()
      inputRef.current.value = ''
    }).catch(error => console.log(error.response))
  }

  // Delete User
  const handleDelete = (userId, userName) => {
    const confirm = window.confirm(`Would you like to delete? ${userName}`)
    if(confirm){
      axios.delete(`${LOCAL_API}/${userId}`)
      .then((response) => {
        location.reload()
      }).catch(error => console.log(error.response))
    }
  }

  // additional features search
  const [searchUser, setSearchUser] = useState('')

  const handleSearch = (e) => {
    // convert the search input to lowercase
    const searchPerson = e.target.value.toLowerCase()
    setSearchUser(searchPerson)
  }

  // convert the listUsers to lowercase to ignore case of each user want to search
  const filterUsers = listUsers.filter((user) => user.name.toLowerCase().includes(searchUser.toLowerCase()))

  return (
    <div>
      <div>
        <strong className=' text-3xl'>Add User</strong>
        <div>
          <label htmlFor="name">Fullname: </label>
          <input type="text" className='border-2' ref={inputRef}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="text" className='border-2 my-2' ref={inputRef}
            onChange={(e) => setNewUser({...newUser, age: e.target.value})}/>
        </div>
        <div className='w-[400px] flex justify-between'>
          <button className='bg-green-400 p-1 mb-2'
            onClick={handleSubmit}>Add</button>
            <div>
              <label htmlFor="age">Search </label>
              <input type="text" className='border-2 my-2' ref={inputRef}
                onChange={handleSearch}/>
            </div>
        </div>
      </div>
      <table className='border w-[500px]'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {
            filterUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <div className='grid grid-cols-3 gap-1'>
                  <Link to={`/read/${user.id}`} className='bg-blue-200 text-blue-800 text-center'>Read</Link>
                  <Link to={`/edit/${user.id}`} className='bg-green-200 text-green-700 text-center'>Edit</Link>
                  <button className='bg-rose-200 text-rose-800 text-center' onClick={() => {handleDelete(user.id, user.name)}}>Del</button>
                </div>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Axios2