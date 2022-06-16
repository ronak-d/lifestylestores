import React, { useEffect, useState } from 'react'
import { Menactivewear } from '../Components/Menactivewear';
import { Menbottomwear } from '../Components/Menbottomwear';
import { Mentopwear } from '../Components/Mentopwear';

export const MenPage = () => {


  return (
    <div>
      <Mentopwear/>
      <Menbottomwear/>
      <Menactivewear/>
    </div>
  )
}
