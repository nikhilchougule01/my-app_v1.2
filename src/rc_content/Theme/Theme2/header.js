import React from 'react';

const T2_Header = ({ props }) => {
    return (
        <header className="site-navbar">
            <div className="site-top-bar">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-6 col-md-6 nav-header-bar text-left">
                            {
                                props.nav ?
                                    <props.nav /> : ''
                            }
                        </div>

                        <div className="col-6 col-md-6 order-3 order-md-3 text-right">
                            <div className="site-top-icons">
                                <ul>
                                    <li>
                                        <a className="site-cart" data-toggle="collapse" href="#minicart" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <span className="icon icon-shopping_cart"></span>
                                            <span className="count">2</span>
                                        </a>
                                        <div className="mini-cart collapse" id="minicart">
                                            <ul className="cart-left-box-block">
                                                <li>
                                                    <div className="cart-images"><img src="./Theme/Theme2/images/img1.png" /></div>
                                                    <div className="cart-table-right">
                                                        <a className="remove-cart" href=""><i className="icon-delete"></i></a>
                                                        <h2 className="head-cart">Magnoom Slim</h2>
                                                        <p className="grey-light-text">Qty : 3 ,  Color : Purple, Sixe : L</p>
                                                        <div className="price"> <div className="price-cart-table">$299</div>  </div>
                                                        <p className="delivery-time">Delivery in 3-4 Days</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="cart-images"><img src="./Theme/Theme2/images/img1.png" /></div>
                                                    <div className="cart-table-right">
                                                        <a className="remove-cart" href=""><i className="icon-delete"></i></a>
                                                        <h2 className="head-cart">Magnoom Slim</h2>
                                                        <p className="grey-light-text">Qty : 3 ,  Color : Purple, Sixe : L</p>
                                                        <div className="price"> <div className="price-cart-table">$299</div>  </div>
                                                        <p className="delivery-time">Delivery in 3-4 Days</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="cart-images"><img src="./Theme/Theme2/images/img1.png" /></div>
                                                    <div className="cart-table-right">
                                                        <a className="remove-cart" href=""><i className="icon-delete"></i></a>
                                                        <h2 className="head-cart">Magnoom Slim</h2>
                                                        <p className="grey-light-text">Qty : 3 ,  Color : Purple, Sixe : L</p>
                                                        <div className="price"> <div className="price-cart-table">$299</div>  </div>
                                                        <p className="delivery-time">Delivery in 3-4 Days</p>
                                                    </div>
                                                </li>

                                            </ul>
                                            <a href="cart-page.html"><button className="go-to-cart">Go To Cart</button></a>
                                        </div>
                                    </li>
                                    <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="site-navbar-top">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-6 col-md-2 order-1 order-md-1 text-left">                            
                            {
                                props.logo.component ?
                                    <props.logo.component folder="Theme2" logoName={props.logo.name ? props.logo.name : ''} /> : ''
                            }
                        </div>

                        <div className="col-12 mb-md-0 col-md-7 order-2 order-md-1 site-search-icon text-center">                            
                            {
                                props.search ?
                                    <props.search /> : ''
                            }
                        </div>


                        <div className="col-6 col-md-3 order-3 order-md-3 text-right">
                            <div className="site-top-buttons">
                                <a href="login.html"> <button type="button" className="btn btn-blue">Login</button> </a>
                                <a href="register.html"> <button type="button" className="btn btn-dark">Register</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default T2_Header;