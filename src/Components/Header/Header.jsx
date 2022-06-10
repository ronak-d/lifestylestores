import React from 'react'

 const Header = () => {
  return (
    <div>
    <div id="topBar">
        <div>
            <a href="">
                <span class="icon-text-middle">
                    <img class="icon" src="https://cdn-icons-png.flaticon.com/128/617/617423.png" alt=""/>
                    <h5>Free Shipping</h5>
                </span>
            </a>
            <a href="">
                <span class="icon-text-middle">
                    <img class="icon" src="https://cdn-icons-png.flaticon.com/128/1611/1611323.png" alt=""/>
                    <h5>Click Collect</h5>
                </span>
            </a>
            <a href="">
                <span class="icon-text-middle">
                    <img class="icon" src="https://cdn-icons-png.flaticon.com/128/726/726570.png" alt=""/>
                    <h5>Return To Store</h5>
                </span>
            </a>
        </div>
        <div class="icon-text-middle">
            <a href="">
                <span class="icon-text-middle">
                    <h6>Download Our Apps</h6>
                </span>
            </a>
            <a href="">
                <span class="icon-text-middle">
                    <h6>Store Locator</h6>
                </span>
            </a>
            <a href="">
                <span class="icon-text-middle">
                    <h6>Help</h6>
                </span>
            </a>
        </div>
    </div>


    <div>
        <div>
            <nav id="navbar" class="icon-text-middle sticky">
                <a href="../pages/index.html" >
                    <span class="icon-text-middle">
                        <span class="logo"></span>
                    </span>
                </a>
                <a href="" id="women" >
                    <span class="icon-text-middle">
                        <h4><span>Women</span></h4>
                    </span>
                </a>
                <a href="" id="men" >
                    <span class="icon-text-middle">
                        <h4><span>Men</span></h4>
                    </span>
                </a>
                <a href="" id="kids" >
                    <span class="icon-text-middle">
                        <h4><span>Kids</span></h4>
                    </span>
                </a>
                <a href="" id="shoesAndBags">
                    <span class="icon-text-middle">
                        <h4><span>Shoes & Bags</span></h4>
                    </span>
                </a>

                <span class="icon-text-middle" >
                    <input class="search-bar" type="text" placeholder="What are you looking for?" />
                </span>

                <a href="signup-or-signin-mob.html" id="signUpSignin">
                    <span class="icon-text-middle">
                        <h4><span>Sign Up - Sign In</span></h4>
                    </span>
                </a>
                <a id="basket" >
                    <span class="icon-text-middle">
                        <h4>Basket</h4>
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/512/37/37464.png" alt=""/>
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