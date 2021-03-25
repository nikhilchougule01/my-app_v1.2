import React from "react";
import Logo from "../../../components/logo";
import Nav_Header from "../../../components/nav_header";
import Search from "../../../components/search";
import T2_Header from "./header";
import Banner from "./content/banner";
import New_Arrivals from "./content/new-arrivals";
import Exclusive_Offers from "./content/exclusive-offers";
import Featured_Products from "./content/featured-products";
import Track_Orders from "./content/track-order";
import Footer from "./content/footer";

function Theme2() {
    const props = {
        header: {
            nav: Nav_Header,
            search: Search,
            logo: {
                component: Logo,
                name: 'mania-logo.png'
            }
        }
    }
    const jsArr = [
        './Theme/Theme2/assets/js/jquery-3.3.1.min.js',
        './Theme/Theme2/assets/js/jquery-ui.js',
        './Theme/Theme2/assets/js/popper.min.js',
        './Theme/Theme2/assets/js/bootstrap.min.js',
        './Theme/Theme2/assets/js/owl.carousel.min.js',
        './Theme/Theme2/assets/js/slick.js',
        './Theme/Theme2/assets/js/custom.js',
        //'./Theme/Theme2/assets/js/main.js'
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
            <T2_Header props={props.header} />
            <Banner />
            <New_Arrivals />
            <Exclusive_Offers />
            <Featured_Products />
            <Track_Orders />
            <Footer />
            {
                jsArr.map((item, idx) => { loadScript(item); })
            }
        </div>
    )
}

export default Theme2;
