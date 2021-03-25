import Nav_Header from "../components/nav_header";
import Theme from "../rc_content/Theme";
import Search from "../components/search";
import Logo from "../components/logo";
import BannerComponent from '../components/home/banner/banner';
import Site_Footer from "../components/site_footer";

function Page1() {
    const props = {
        header: {
            nav: Nav_Header,
            search: Search,
            logo: {
                component: Logo,
                name: 'logo.svg'
            }
        },
        banner: {
            component: BannerComponent
        },
        footer: {
            component: Site_Footer
        }
    }

    return (
        <div>
            <Theme {...props} />
        </div>
    )
}

export default Page1;