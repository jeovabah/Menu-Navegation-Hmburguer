import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'

export const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> }  />
        <Route path="/produto" element={ <Product /> }  />
    </Routes>
  )
}
