import React from 'react'
import styles from "./Header.module.css"

 const Header = () => {
  return (
    <div>
    <div className={styles.topBar}>
        <div className={styles.top_left_bar} >
            <div className={styles.h_top_bar}>
                <span className={styles.text_top}>
                    <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/617/617423.png" alt=""/>
                    <h5>Free Shipping</h5>
                </span>
            </div>
            <div className={styles.h_top_bar}>
                <span className={styles.text_top}>
                    <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/1611/1611323.png" alt=""/>
                    <h5>Click Collect</h5>
                </span>
            </div>
            <div className={styles.h_top_bar}>
                <span className={styles.text_top}>
                    <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/726/726570.png" alt=""/>
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


    <div>
        <div>
            <nav className = {styles.mid_nav}>
                <a>
                    <span class="icon-text-middle">
                        <span class="logo"></span>
                    </span>
                </a>
                <a>
                    <span class="icon-text-middle">
                        <h4><span>Women</span></h4>
                    </span>
                </a>
                <a>
                    <span class="icon-text-middle">
                        <h4><span>Men</span></h4>
                    </span>
                </a>
                <a>
                    <span class="icon-text-middle">
                        <h4><span>Kids</span></h4>
                    </span>
                </a>
                <a >
                    <span class="icon-text-middle">
                        <h4><span>Shoes & Bags</span></h4>
                    </span>
                </a>

                <span class="icon-text-middle" >
                    <input class="search-bar" type="text" placeholder="What are you looking for?" />
                </span>

                <a>
                    <span class="icon-text-middle">
                        <h4><span>Sign Up - Sign In</span></h4>
                    </span>
                </a>
                <a>
                    <span class="icon-text-middle">
                        <h4>Basket</h4>
                        <img ClassName={styles.icon} src="https://cdn-icons-png.flaticon.com/512/37/37464.png" alt=""/>
                    </span>
                </a>
            </nav>
        </div>
    </div>


    <div>
        <div id="add">Free Shipping On All Orders + Get 15% Off on 2,999 and Above. Use Code SHOP15 </div>
    </div>
    </div>
  )
}

export default Header;