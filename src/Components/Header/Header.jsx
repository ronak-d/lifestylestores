import React, { useEffect, useState } from 'react'
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import axiosApiCall from '../Axios/AxiosCall';


 const Header = () => {

    const [cartItem, setCartItem] =useState([]);
// using cart?length to show thee counter of basket
    useEffect(() =>{
        axiosApiCall("cart","get",null)
        .then((response) => {
            setCartItem(response.data)
          console.log("responsekids",response)
        })
    },[])

  return (
    <div>
        <div className={styles.topBar}>
            <div className={styles.top_left_bar}>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/617/617423.png" alt="" />
                        <h5 className={styles.nav_text}>Free Shipping</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/1611/1611323.png" alt="" />
                        <h5 className={styles.nav_text}>Click Collect</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/726/726570.png" alt="" />
                        <h5 className={styles.nav_text}>Return</h5>
                    </span>
                </div>
            </div>

            <div className={styles.top_text_left}>
            <div className={styles.up_nav_h6}>Download our store</div>
            <div className={styles.up_nav_h6}> Store Locator</div>
            <div className={styles.up_nav_h6}>Help</div>
            </div>

        </div>


        <nav className={styles.mid_nav}>

            <div className={styles.mid_nav1}>
                <Link to="/">
                    <img
                    className={styles.logo}
                    src="https://vrchennai.com/UploadFile/Storeimage/Lifestyle-big.png" />
                    </Link>

                <div className={styles.mid_nav_text}>
                    <Link to="/women"> <h4 className={styles.nav_text}>Women</h4> </Link>
                </div>

                <span className={styles.mid_nav_text}>
                <Link to="/men"> <h4  className={styles.nav_text}>Men</h4> </Link>
                </span>

                <span className={styles.mid_nav_text}>
                <Link to="/kids"> <h4  className={styles.nav_text}>Kids</h4> </Link>
                </span>

                <span className={styles.mid_nav_text}>
                    <h4  className={styles.nav_text}>Shops&Bags</h4>
                </span>

                <span className={styles.mid_nav_text}>
                    <h4  className={styles.nav_text}>Beauty</h4>
                </span>

            </div>

            <div className={styles.mid_nav2}>

                <input className={styles.search_bar} type="text" placeholder="What are you looking for?" />

                <span className={styles.mid_nav_text_unique}>
                    <h4  className={styles.nav_text}>Sign Up-Sign In</h4>
                </span>

                <span className={styles.text_basket}>
                    <img className={styles.basket} src="https://cdn-icons-png.flaticon.com/512/37/37464.png" />
                    <Link to="/cart">
                    <h4  className={styles.nav_text}>Basket</h4>
                    </Link>
                    <p className={styles.basket_count}>{cartItem?.length}</p>
                </span>
            </div>

        </nav>

      <div className={styles.nav_3rd_line}>
           <div id="add">Free Shipping On All Orders + Get 15% Off on 2,999 and Above.Use Code SHOP15 </div>
      </div>

    </div>
  )
}

export default Header;