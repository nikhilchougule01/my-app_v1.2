const Footer = () => {
    return (
        <footer className="site-footer border-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 mb-5 mb-lg-0 pr-4">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Quick Links</h3>
                            </div>
                            <div className="col-md-12">
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Self Definition</a></li>
                                    <li><a href="#">Procedure</a></li>
                                    <li><a href="#">Offline Stores</a></li>
                                    <li><a href="#">Our Valued Customers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 mb-5 mb-lg-0 pr-4">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Help</h3>
                            </div>
                            <div className="col-md-12">
                                <ul className="list-unstyled">
                                    <li><a href="#">Payments</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Cancellation & Returns</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Mesurement Process</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 mb-5 mb-lg-0 pr-4">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Contact Us</h3>
                            </div>
                            <div className="col-md-12">
                                <ul className="list-unstyled">
                                    <li><a href="aboutus.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                    <li><a href="#">Work with Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-6">
                        <div className="block-7 newsletter-block">
                            <form action="#" method="post">
                                <h3 className="footer-heading mb-4">Newsletter</h3>
                                <p>Our email subscribers get the inside scoop on new products, Promotions, Contests and more. Sign up, it's right thing to do.</p>
                                <div className="form-group">
                                    <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Enter Your Email" />
                                    <input type="submit" className="btn btn-icon" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 mt-5 pt-5 border-top">
                    <div className="col-6">
                        <img src="./Theme/Theme2/images/footer-card.png" />
                    </div>
                    <div className="col-6 text-right">
                        <ul className="footer-socials">
                            <li><a href="#" className="fb">Facebook</a></li>
                            <li><a href="#" className="tw">Twitter</a></li>
                            <li><a href="#" className="in">Linkedin</a></li>
                            <li><a href="#" className="ins">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5 pt-5 text-center border-top">
                    <div className="col-md-12">
                        <p>
                            Copyright &copy; 2020 Shopin Shop. All Rights Reserved.
            </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;