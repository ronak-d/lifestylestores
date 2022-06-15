import React, { useEffect, useState } from 'react'
import axiosApiCall from '../../Axios/AxiosCall';
import styles from '../../Prod.module.css';

export const Kidsboys = () => {

    const [data,setData] = useState(null);

    useEffect(() =>{
        axiosApiCall("kids","get",data)
        .then((res) => {
            setData(res.data["kids-boys"])
            console.log(res.data["kids-boys"])
        })
        .catch((err) => {
            console.log(err)
        })
    },[]);
    

    return (
        <div className={styles.main_prod_box}>
        {
          data?.map((prod)=>{
            return(
              <div>
                {
                  <div className={styles.prod_box}>
                    <div>
                      <img className={styles.prod_imgs} src={prod.img[0]} />
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
