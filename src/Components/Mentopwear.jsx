import React, { useEffect, useState } from 'react'
import axiosApiCall from './Axios/AxiosCall';
import styles from '../Components/Prod.module.css';
import axios from 'axios';
import { handleClick } from './CartAxioscall';

export const Mentopwear = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() =>{
      setLoading(true);
      
        axiosApiCall("mens", "get", null )
        .then((res)=>{
          // console.log(res.data,res.data["men-topwear"],"test")
          setLoading(false);
          setData(res.data["men-topwear"]);
        })
        .catch((err)=>{
          setLoading(false);
          console.log(err)
        })        
    },[])
    console.log("data",data);

  return (
    <div className={styles.main_prod_box}>
    {
      
      data?.map((prod)=>{
        return(
          <div>
            {
              <div className={styles.prod_box}>
                <div>
                  <img className={styles.prod_imgs} src={prod.img} />

                  <div className={styles.prod_price_btn}>
                    <div className={styles.prod_price}>{`₹ ${prod.price}`}</div>
                    <div onClick={() => handleClick(prod)} className={styles.prod_add_cart}>
                      <button className={styles.prod_cart_btn}>Add To Cart</button></div>
                  </div>

                  <div className={styles.prod_brand}>{prod.brand}</div>
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

// hyphen keys are always accessed by bracket notation.