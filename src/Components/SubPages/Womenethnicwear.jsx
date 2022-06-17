import React, { useEffect, useState } from 'react'

export const Womenethnicwear = () => {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() =>{
      setLoading(true);
      
      axiosApiCall("women", "get", null )
      .then((res)=>{
        setData(res.data["women-ethnicwear"]);
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
