import React from 'react'
import { Womenbags } from '../Components/SubPages/Womenbags'
import { Womenbottom } from '../Components/SubPages/Womenbottom'
import { WomentopWear } from '../Components/SubPages/WomentopWear'

export const WomenPage = () => {
  return (
    <div>
        <WomentopWear/>
        <Womenbags/>
        <Womenbottom/>
    </div>
  )
}
