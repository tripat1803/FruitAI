import React from 'react'
import Slider from '../components/Silder'
import { Route, Routes } from 'react-router-dom'
import AdminProd from '../components/AdminProd'


const AdminRoutes = () => {
  return (
    <Slider>
      <Routes>

        <Route path='/' element={<AdminProd />} />
        {/* <Route path='/statistics' element={<Stats />} /> */}
        {/* <Route path='/stock' element={<Stock />} /> */}

      </Routes>
    </Slider>
  )
}

export default AdminRoutes