import React, { useEffect } from 'react'
import axios from 'axios'

const Joke = () => {
    useEffect(() => {
        axios('https://icanhazdadjoke.com/')
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response))
    },[])
  return (
    <div>Joke</div>
  )
}

export default Joke