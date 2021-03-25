function BannerComponent() {
    const banner = [
        {
            id: 1,
            img: './Theme/Theme1/images/home-banner.jpg',
            h3: 'EXCLUSIVE COLLECTION',
            h1: "SHIRT'S FOR MEN",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shop_button: 'SHOP NOW'
        },
        {
            id: 2,
            img: './Theme/Theme1/images/home-banner.jpg',
            h3: 'EXCLUSIVE COLLECTION',
            h1: "SHIRT'S FOR MEN",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shop_button: 'SHOP NOW'
        },
        {
            id: 3,
            img: './Theme/Theme1/images/home-banner.jpg',
            h3: 'EXCLUSIVE COLLECTION',
            h1: "SHIRT'S FOR MEN",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            shop_button: 'SHOP NOW'
        }
    ];

    return (
        <div className="regular slider">
            {
                banner ?
                    banner.map((item, idx) => (
                        <div key={idx}>
                            <img src={item.img} />
                            <div className="banner-content">
                                <h3>{item.h3}</h3>
                                <h1>{item.h1}</h1>
                                <p>{item.p}</p>
                                <a className="btn btn-dark-grey">{item.shop_button}</a>
                            </div>
                        </div>
                    )) : ''
            }
        </div>
    )
}

export default BannerComponent;