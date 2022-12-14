import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from './routes/movies/Movies';

const Allroute = () => {
  return (
   <Routes>
    <Route path='/movies' element='<Movies/>'/>
   </Routes>
  )
}

export default Allroute;
