import React, { useEffect, useState } from 'react'
import axiosApiCall from '../Components/Axios/AxiosCall';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { Menactivewear } from '../Components/Menactivewear';
import { Menbottomwear } from '../Components/Menbottomwear';
import { Mentopwear } from '../Components/Mentopwear';

export const MenPage = () => {

    const [Loading, setLoading] = useState(true);

  return (
    <div>
      <Header />
      <Mentopwear/>
      <Menbottomwear/>
      <Menactivewear/>
      <Footer/>
    </div>
  )
}
