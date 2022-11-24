import React from 'react'
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Index from "/@/views/Index";

export default ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" key={'/'} element={<Index/>}/>
        </Routes>
    </BrowserRouter>
)
