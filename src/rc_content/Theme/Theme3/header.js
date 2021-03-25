import React from 'react';

const T3_Header = ({ props }) => {
    //console.log('header', props);
    return (
        <header className="site-navbar">

            <div className="site-navbar-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 header-main">
                            {
                                props.logo.component ?
                                    <props.logo.component folder="Theme1" logoName={props.logo.name ? props.logo.name : ''} /> : ''
                            }
                            <div className="header-bg-sec">
                                {
                                    props.nav ?
                                        <props.nav /> : ''
                                }

                                <div className="header-right-sec">
                                    <form action="" className="site-block-top-search">
                                        <span className="icon icon-search2 desktop-search"><img src="./Theme/Theme1/images/search-icon.svg" /></span>
                                        <span className="icon icon-search2 mobile-search"><img src="./Theme/Theme1/images/search-black.svg" /></span>
                                        <input type="text" className="form-control rounded-0" placeholder="Search" />
                                    </form>

                                    <div className="site-top-icons header-cart">
                                        <ul>
                                            <li>
                                                <a className="site-cart" data-toggle="collapse" href="#minicart" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <span className="icon icon-shopping_cart"><img src="./Theme/Theme1/images/cart.png" /></span>

                                                    <span className="count">2</span>
                                                </a>
                                                <div className="mini-cart collapse" id="minicart">
                                                    <ul className="cart-left-box-block">
                                                        <li>
                                                            <div className="cart-images"><img src="./Theme/Theme1/images/shirt4.jpg" /></div>
                                                            <div className="cart-table-right">
                                                                <a className="remove-cart" href=""><i className="icon-delete"></i></a>
                                                                <h2 className="head-cart">Magnoom Slim</h2>
                                                                <p className="grey-light-text">Qty : 3 ,  Color : Purple, Sixe : L</p>
                                                                <div className="price"> <div className="price-cart-table">$299</div>  </div>
                                                                <p className="delivery-time">Delivery in 3-4 Days</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="cart-images"><img src="./Theme/Theme1/images/shirt4.jpg" /></div>
                                                            <div className="cart-table-right">
                                                                <a className="remove-cart" href=""><i className="icon-delete"></i></a>
                                                                <h2 className="head-cart">Magnoom Slim</h2>
                                                                <p className="grey-light-text">Qty : 3 ,  Color : Purple, Sixe : L</p>
                                                                <div className="price"> <div className="price-cart-table">$299</div>  </div>
                                                                <p className="delivery-time">Delivery in 3-4 Days</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="cart-images"><img src="./Theme/Theme1/images/shirt4.jpg" /></div>
                                                            <div className="cart-table-right">
                                                                <a className="remove-cart" href=""><i className="icon-delete"></i></a>
                                                                <h2 className="head-cart">Magnoom Slim</h2>
                                                                <p className="grey-light-text">Qty : 3 ,  Color : Purple, Sixe : L</p>
                                                                <div className="price"> <div className="price-cart-table">$299</div>  </div>
                                                                <p className="delivery-time">Delivery in 3-4 Days</p>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                    <div className="cart-bottom"><a href="cart-page.html"><button className="go-to-cart orange-btn">Go To Cart</button></a></div>
                                                </div>
                                            </li>
                                            <li className="d-inline-block d-md-none ml-md-0 mobile-menu"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                                        </ul>
                                    </div>

                                    <div className="site-top-buttons">
                                        <div className="user-block">
                                            <span className="login-logout"><a href="">Login</a> <span className="divider">/</span> <a href="">Register</a>  </span>

                                        </div>
                                        <ul className="user-block-inner collapse" id="user-section">
                                            <li><a href="#">My Profile</a></li>
                                            <li><a href="#">Orders</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default T3_Header;