import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Axios2 from './Axios2'
import AxiosRead from './AxiosRead'
import AxiosEdit from './AxiosEdit'

const AxiosHome = () => {
  return (
    <Routes>
        <Route index element={<Axios2 />}/>
        <Route path='/' element={<Axios2 />}/>
        <Route path='/read/:id' element={<AxiosRead />}/>
        <Route path='/edit/:id' element={<AxiosEdit />}/>
    </Routes>
  )
}

export default AxiosHome