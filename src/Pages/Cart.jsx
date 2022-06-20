import React, { useEffect } from 'react'
import { useState } from 'react'
import axiosApiCall from '../Components/Axios/AxiosCall';
// import { handleRemove } from '../Components/SubPages/CartRemoveItem';
import styles from './Cart.module.css'

export const Cart = () => {

    const [cartItem, setCartItem] =useState([]);

    useEffect(() =>{
        axiosApiCall("cart","get",null)
        .then((response) => {
            setCartItem(response.data)
          console.log("response",response.data)
        })
    },[])

  return (
    <div>
      <h3>Orders Details</h3>
    {
      cartItem?.map((prod)=>{
        return(
          <div>
            {
              <div >
                <div className={styles.cart_box}>
                  <img className={styles.cart_imgs} src={prod.img[0]} />

                  <div className={styles.cart_price_btn}>
                    <div className={styles.cart_price}>{`Price : ₹ ${prod.price}`}</div>

                    
                    {/* <div  className={styles.add_cart}>
                      <button onClick={() => handleRemove(prod)} className={styles.cart_rmv}>Remove</button>
                    </div> */}
                  </div>

                  <div className={styles.prod_brand}>Brand: {prod.brand}</div>
                </div>
              </div>
            }
          </div>
        )
      })
    }
    </div>
  )
}
