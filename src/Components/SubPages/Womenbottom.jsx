import React, { useEffect, useState } from 'react'
import axiosApiCall from '../Axios/AxiosCall';
import styles from '../Prod.module.css'

export const Womenbottom = () => {

    const [Loading, setLoading] = useState(true);
    const [data,setData] = useState(null);

    // api call on mounting
    // axiosApiCall(url,method,data)
    useEffect(() =>{
        setLoading(true);

        axiosApiCall("women","get",data)
        .then((res) =>{
            setLoading(false);
            console.log(res.data["women-bottoms"]);
            setData(res.data["women-bottoms"]);
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
