import React, { useEffect, useState } from 'react'
import axiosApiCall from '../Components/Axios/AxiosCall';
import { Mentopwear } from '../Components/Mentopwear';

export const MenPage = () => {

    const [Loading, setLoading] = useState(true);

  return (
    <div>
      <Mentopwear/>
    </div>
  )
}
