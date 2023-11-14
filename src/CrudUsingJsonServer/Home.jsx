import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    // Handle all users datails
    const [users, setUsers] = useState([])

    // Get data using axios
    useEffect(() =>{
        axios.get('http://localhost:3000/users')
        .then(response => {
            // Sort users array by name before setting state
            const sortedUsers = response.data.sort((a, b) => a.name.localeCompare(b.name));
            // set the data request to variable
            setUsers(sortedUsers);
        })
        .catch(error => console.log(error.response))
    },[])

    // Delete the user by ID
    const handleDelete = (userId, userName) => {
        const confirm = window.confirm(`Would you like to delete? ${userName}`)
        if(confirm){
            axios.delete('http://localhost:3000/users/' + userId)
            .then(res => {
                location.reload()
            })
            .catch(error => error.response)
        }
    }

  return (
    <div className=''>
        <header className='flex justify-evenly w-[900px]'>
            <strong className='text-3xl'>List of Users</strong>
            <div className='bg-lime-600 px-2 py-1 rounded text-white'>
                <Link to='/create'>Add+</Link>
            </div>
        </header>
        <table className='w-[900px] border'>
            <thead >
                <tr className='w-[600px] flex justify-between'>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody className='w-[900px]'>
                {
                    users.map((user, index) => (
                        <tr 
                            className='flex justify-between w-[900px]'
                            key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <div className='text-white w-[150px] my-1 grid grid-cols-3 gap-1 text-center'>
                                <td className='bg-cyan-700 rounded'><Link to={`/read/${user.id}`}>Read</Link></td>
                                <td className='bg-lime-700 rounded'><Link to={`/update/${user.id}`}>Edit</Link></td>
                                <td className='bg-rose-700 rounded'><button onClick={e => handleDelete(user.id, user.name)}>Delete</button></td>
                            </div>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home