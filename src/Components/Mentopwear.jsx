import React, { useEffect, useState } from 'react'
import axiosApiCall from './Axios/AxiosCall';
import styles from '../Components/Prod.module.css';

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
    <div className={styles.main_prod_box}>
    {
      data?.map((prod)=>{
        return(
          <div>
            {
              <div className={styles.prod_box}>
                <div>
                  <img className={styles.prod_imgs} src={prod.img} />
                  <div className={styles.prod_price}>{`₹ ${prod.price}`}</div>
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