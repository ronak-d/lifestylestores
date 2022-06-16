import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

import { Kidsboys } from '../Components/SubPages/kids/Kidsboys'
import {Kidsgirls} from '../Components/SubPages/kids/Kidsgirls'
export const KidsPage = () => {
  return (
    <div>
      <Header/>
        <Kidsgirls/>
        <Kidsboys/>
      <Footer/>
    </div>
  )
}
