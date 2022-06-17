import React from 'react'
import { Routes, Route } from "react-router-dom";
import { WomenPage } from '../Pages/WomenPage';
import { MenPage } from '../Pages/MenPage';
import { KidsPage } from '../Pages/KidsPage';
import { Cart } from '../Pages/Cart';
import Landing from '../Pages/Landing';

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}
