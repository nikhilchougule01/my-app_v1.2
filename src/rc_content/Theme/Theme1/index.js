import React from "react";
import Logo from "../../../components/logo";
import Nav_Header from "../../../components/nav_header";
import Search from "../../../components/search";
import T1_Header from "./header";
import Banner from "./content/banner";
import Banner_Bottom from "./content/banner-bottom";
import Featured_Products from "./content/featured-products";
import Mini_Banner from "./content/mini-banner";
import Main_Featured from "./content/featured-main";
import Limited_Banner_Offer from "./content/limited-banner-offer";
import Main_Featured_Section2 from "./content/featured-main-2";
import Customer_Review from "./content/customer-review";
import Footer from "./footer";
import Cust_Banner from "../../../components/home/banner/banner";

function Theme1() {
    const props = {
        header: {
            nav: Nav_Header,
            search: Search,
            logo: {
                component: Logo,
                name: 'logo.svg'
            }
        },
        banner: Cust_Banner
    }
    const jsArr = [
        './Theme/Theme1/assets/js/jquery-3.3.1.min.js',
        './Theme/Theme1/assets/js/jquery-ui.js',
        './Theme/Theme1/assets/js/slick.js',
        './Theme/Theme1/assets/js/custom.js',
        './Theme/Theme1/assets/js/bootstrap.min.js',
        './Theme/Theme1/assets/js/owl.carousel.min.js',
        './Theme/Theme1/assets/js/main.js'
    ];
    var loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        tag.type = "text/javascript";
        document.body.appendChild(tag);
    }

    return (
        <div className="site-wrap">
            <T1_Header props={props.header} />
            <Banner />
            <Banner_Bottom />
            <Featured_Products />
            <Mini_Banner />
            <Main_Featured />
            <Limited_Banner_Offer />
            <Main_Featured_Section2 />
            <Customer_Review />
            <Footer />
            {
                jsArr.map((item, idx) => { loadScript(item); })
            }
        </div>
    )
}

export default Theme1;
