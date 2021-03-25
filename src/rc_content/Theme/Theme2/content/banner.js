const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="regular slider">
                    <div>
                        <img src="./Theme/Theme2/images/banner1.jpg" />
                            <div className="banner-content">
                                <h1>50% OFF</h1>
                                <p>Discount on Women’s Wear</p>
                                <a href="Product-listing-grid-view.html" className="btn btn-blue">View Products</a>
                            </div>
          </div>
                        <div>
                            <img src="./Theme/Theme2/images/banner2.jpg" />
                                <div className="banner-content">
                                    <h1>15% OFF</h1>
                                    <p>Discount on Women’s Accessories</p>
                                    <a href="Product-listing-grid-view.html" className="btn btn-blue">View Products</a>
                                </div>
          </div>
                            <div>
                                <img src="./Theme/Theme2/images/banner3.jpg" />
                                    <div className="banner-content">
                                        <h1>5% OFF</h1>
                                        <p>Discount on All Products</p>
                                        <a href="Product-listing-grid-view.html" className="btn btn-blue ">View Products</a>
                                    </div>
          </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Banner;