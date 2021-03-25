const Featured_Products = () => {
	return (
		<div className="featured-main">
			<div className="container">
				<ul className="nav nav-pills">
					<li><a className="active" data-toggle="pill" href="#featured">FEATURED</a></li>
					<li><a data-toggle="pill" href="#trendy">TRENDY</a></li>
					<li><a data-toggle="pill" href="#best-seller">BEST SELLER</a></li>
				</ul>

				<div className="tab-content product-list-main">
					<div id="featured" className="tab-pane fade in active show">
						<div className="row">
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea1.jpg" />

								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea2.jpg" />
									<span className="tag new">NEW</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span><span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea3.jpg" />
									<span className="tag new">NEW</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea4.jpg" />
									<span className="tag sale">SALE</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>

							<div className="col-sm-12 view-more-home text-center">
								<button className="orange-btn">VIEW MORE</button>
							</div>

						</div>
					</div>

					<div id="trendy" className="tab-pane fade">
						<div className="row">
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea4.jpg" />

								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea1.jpg" />
									<span className="tag new">NEW</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span><span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea2.jpg" />
									<span className="tag new">NEW</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea3.jpg" />
									<span className="tag sale">SALE</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>

							<div className="col-sm-12 view-more-home text-center">
								<button className="orange-btn">VIEW MORE</button>
							</div>

						</div>
					</div>

					<div id="best-seller" className="tab-pane fade">
						<div className="row">
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea4.jpg" />

								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea3.jpg" />
									<span className="tag new">NEW</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span><span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea2.jpg" />
									<span className="tag new">NEW</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>
							<div className="product-full col-sm-3">
								<div className="product-image">
									<img src="./Theme/Theme1/images/fea1.jpg" />
									<span className="tag sale">SALE</span>
								</div>
								<div className="product-name-block"><span className="product-name">Selletria ostma </span> <span className="product-price">$275 </span></div>
							</div>

							<div className="col-sm-12 view-more-home text-center">
								<button className="orange-btn">VIEW MORE</button>
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Featured_Products;