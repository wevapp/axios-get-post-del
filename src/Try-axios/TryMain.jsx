import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import TryHome from './TryHome';
import Tryread from './Tryread';
import Tryedit from './Tryedit';

const TryMain = () => {
    return (
        <Routes>
            <Route index element={<TryHome />}/>
            <Route path='/' element={<TryHome />}/>
            <Route path='/read/:id' element={<Tryread />}/>
            <Route path='/edit/:id' element={<Tryedit />}/>
        </Routes>
    )
}

export default TryMain