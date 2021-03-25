//import { Link } from "react-router-dom";

const Nav_Header = () => {
    return (
        <nav className="site-navigation text-right text-md-left" role="navigation">
            <ul className="site-menu js-clone-nav d-none d-md-block">
                <li className="has-children">
                    <a href="#">Men</a>
                    <ul className="dropdown">
                        <li><h3>Collection</h3></li>
                        <li className="has-children"><a href="#">Festive Collection</a>

                            <ul className="dropdown">
                                <li className="has-children"><a href="#">Top Wear</a>
                                    <ul className="dropdown">
                                        <li><a href="#">T-Shirt</a></li>
                                        <li><a href="#">Casual Shirt</a></li>
                                        <li><a href="#">Formal Shirt</a></li>
                                        <li><a href="#">Kurtas</a></li>
                                        <li><a href="#">Winter Wear</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li className="has-children"><a href="#">Footwear</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Sports Shoes</a></li>
                                        <li><a href="#">Casual Shoes</a></li>
                                        <li><a href="#">Formal Shoes</a></li>
                                        <li><a href="#">Slippers</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Accesories</a></li>
                            </ul>

                        </li>
                        <li><a href="#">Home Style</a></li>
                        <li><a href="#">BIBA Collection</a></li>
                        <li><a href="#">End Of Season Sale</a></li>
                        <li><a href="#">New Arrival</a></li>
                    </ul>
                </li>
                <li className="has-children">
                    <a href="Product-listing-grid-view.html">Women</a>
                    <ul className="dropdown">
                        <li><h3>Collection</h3></li>
                        <li className="has-children"><a href="#">Festive Collection</a>

                            <ul className="dropdown">
                                <li className="has-children"><a href="#">Top Wear</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">T-Shirt</a></li>
                                        <li><a href="#">Jump Suits</a></li>
                                        <li><a href="#">Kurtas</a></li>
                                        <li><a href="#">Night Dresses</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li className="has-children"><a href="#">Footwear</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Heels</a></li>
                                        <li><a href="#">Flats</a></li>
                                        <li><a href="#">Casual Shoes</a></li>
                                        <li><a href="#">Sneakers</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Accesories</a></li>
                            </ul>

                        </li>

                        <li><a href="#">Home Style</a></li>
                        <li><a href="#">BIBA Collection</a></li>
                        <li><a href="#">End Of Season Sale</a></li>
                        <li><a href="#">New Arrival</a></li>
                    </ul>
                </li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
        </nav>
    )
}
export default Nav_Header;