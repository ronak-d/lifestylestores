import React, { useEffect, useState } from 'react'
import axiosApiCall from './Axios/AxiosCall';

export const Mentopwear = () => {

    const [Loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() =>{
        setLoading(true);
        
        axiosApiCall("mens", "get", null )
        .then((res)=>{
          // console.log(res.data,res.data["men-topwear"],"test")
          setData(res.data["men-topwear"]);
        })
        .catch((err)=>{
          console.log(err)
        })        
    },[])
    console.log("data",data);
  return (
    <div>
    {
      data?.map((prod)=>{
        return(
          <div>
            {
              prod.brand
            }
          </div>
        )
      })
    }
    </div>
  )
}

// hyphen keys are always accessed by bracket notation.