import React from 'react'
import {Routes, Route} from "react-router-dom"
import PremiumPlan from './PremiumPlan';
import Home from './Home';

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/PremiumPlan' element={<PremiumPlan />}></Route>
    </Routes>
  )
}
