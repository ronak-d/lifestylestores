import React, { useEffect, useState } from 'react'
import axiosApiCall from '../../Axios/AxiosCall'
import { handleClick } from '../../CartAxioscall';
import styles from '../../Prod.module.css'

export const Kidsgirls = () => {

    const [Loading, setLoading] = useState(true);
    const [data,setData] = useState(null);

    // api call on mounting
    // axiosApiCall(url,method,data)
    useEffect(() =>{
        setLoading(true);

        axiosApiCall("kids","get",data)
        .then((res) =>{
            setLoading(false);
            console.log(res.data["kids-girls"]);
            setData(res.data["kids-girls"]);
        })
        .catch((err) =>{
            console.log(err);
            setLoading(false);
        })
    },[])

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
