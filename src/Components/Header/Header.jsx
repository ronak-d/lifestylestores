import React from 'react'
import styles from "./Header.module.css"

 const Header = () => {
  return (
    <div>
        <div className={styles.topBar}>
            <div className={styles.top_left_bar}>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/617/617423.png" alt="" />
                        <h5>Free Shipping</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/1611/1611323.png" alt="" />
                        <h5>Click Collect</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/726/726570.png" alt="" />
                        <h5>Return To Store</h5>
                    </span>
                </div>
            </div>

            <div className={styles.top_text_left}>
                <div className={styles.h_top_bar}>
                    <h6>Download Our Apps</h6>
                </div>
                <div className={styles.h_top_bar}>
                    <h6>Store Locator</h6>
                </div>
                <div className={styles.h_top_bar}>
                    <h6>Help</h6>
                </div>
            </div>
        </div>


        <nav className={styles.mid_nav}>

            <div className={styles.mid_nav1}>
                    <img
                    className={styles.logo}
                    src="https://vrchennai.com/UploadFile/Storeimage/Lifestyle-big.png" />

                <div className={styles.mid_nav_text}>
                    <h4>Women</h4>
                </div>

                <span className={styles.mid_nav_text}>
                    <h4>Men</h4>
                </span>

                <span className={styles.mid_nav_text}>
                    <h4>Kids</h4>
                </span>

                <span className={styles.mid_nav_text}>
                    <h4>Shops&Bags</h4>
                </span>

                <span className={styles.mid_nav_text}>
                    <h4>Beauty</h4>
                </span>

            </div>

            <div className={styles.mid_nav2}>

                <input className={styles.search_bar} type="text" placeholder="What are you looking for?" />

                <span className={styles.mid_nav_text}>
                    <h4>Sign Up-Sign In</h4>
                </span>

                <span className={styles.text_basket}>
                    <img className={styles.basket} src="https://cdn-icons-png.flaticon.com/512/37/37464.png" />
                    <h4>Basket</h4>
                </span>
            </div>

        </nav>

      <div>
           <div id="add">Free Shipping On All Orders + Get 15% Off on 2,999 and Above.Use Code SHOP15 </div>
      </div>

    </div>
  )
}

export default Header;