import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/newService'

const Axios2 = () => {

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const usersData = await fetchUsers()
            console.log(usersData);
        }
        getUsers()
    },[])



  return (
    <div>

    </div>
  )
}

export default Axios2