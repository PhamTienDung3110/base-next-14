import React from 'react'

function Testimonial() {
  return (
    <>
        	<section className="testimonial-section section-padding">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h6 className="sub-title">Our Testimonial</h6>
						<h2>Client Feedback</h2>
					</div>
				</div>
				<div className="col-lg-12 col-md-12">
					<div className="testimonial-slider owl-carousel owl-theme">
						<div className="single-testimonial">
							<div className="rating-box">
								<ul>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
							</div>
							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
							</div>
							<div className="avatar">
								<img src="/img/client/testimonial-1.jpg" alt="testimonial images"/>
							</div>
							<div className="testimonial-bio">
								<div className="bio-info">
									<h3>Saabir al-Obeid</h3>
									<span>Turkey</span>
								</div>
							</div>
						</div>
						<div className="single-testimonial">
							<div className="rating-box">
								<ul>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
							</div>
							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
							</div>
							<div className="avatar">
								<img src="/img/client/testimonial-2.jpg" alt="testimonial images"/>
							</div>
							<div className="testimonial-bio">
								<div className="bio-info">
									<h3>Zahra Burnett</h3>
									<span>United States</span>
								</div>
							</div>
						</div>
						<div className="single-testimonial">
							<div className="rating-box">
								<ul>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
							</div>
							<div className="testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
							</div>
							<div className="avatar">
								<img src="/img/client/testimonial-3.jpg" alt="testimonial images"/>
							</div>
							<div className="testimonial-bio">
								<div className="bio-info">
									<h3>Stevie Wills</h3>
									<span>Germany</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Testimonial