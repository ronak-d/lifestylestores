import React, { useEffect } from 'react'
import { useState } from 'react'
import axiosApiCall from '../Components/Axios/AxiosCall';

export const Cart = () => {

    const [cartItem, setCartItem] =useState([]);

    useEffect(() =>{
        axiosApiCall("cart","get",null)
        .then((response) => {
            setCartItem(response.data)
          console.log("responsekids",response)
        })
    },[])

  return (
    <div>
    {
        
        cartItem?.map((item) => 
            item.brand
        )
    }
    </div>
  )
}
