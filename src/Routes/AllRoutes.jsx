import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from '../Pages/Home';
import { KidsPage } from '../Pages/KidsPage';
import { MenPage } from '../Pages/MenPage';
import { WomenPage } from '../Pages/WomenPage';

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
    </Routes>
    </>
  )
}
