import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { Womenbags } from '../Components/SubPages/Womenbags'
import { Womenbottom } from '../Components/SubPages/Womenbottom'
import { WomentopWear } from '../Components/SubPages/WomentopWear'

export const WomenPage = () => {
  return (
    <div>
      <Header/>
        <WomentopWear/>
        <Womenbags/>
        <Womenbottom/>
      <Footer/>
    </div>
  )
}
