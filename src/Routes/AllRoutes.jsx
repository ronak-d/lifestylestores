import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from '../Pages/Home';
import { WomenPage } from '../Pages/WomenPage';
import { MenPage } from '../Pages/MenPage';
import { KidsPage } from '../Pages/KidsPage';
import { Cart } from '../Pages/Cart';

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}
