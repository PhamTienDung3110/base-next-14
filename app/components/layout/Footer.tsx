import { Link } from '@/i18n/routing'
import React from 'react'

function Footer() {
  return (
    <>
        	<section className="footer-subscribe-wrapper">
		<div className="subscribe-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6">
						<div className="subscribe-content">
							<h2>Sign Up Our Newsletter</h2>
							<p>We Offer An Informative Monthly Technology Newsletter - Check It Out.</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<form className="newsletter-form">
							<input type="email" className="input-newsletter" name="email" placeholder="Enter Your Email" required autoComplete="off"/>
							<button type="submit">Subscribe Now</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<Link className="footer-logo" href="#">
								<img src="/img/logo.png" className="white-logo" alt="logo"/>
							</Link>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>
							<ul className="footer-social">
								<li>
									<Link href="#"> <i className="fab fa-facebook-f"></i></Link>
								</li>
								<li>
									<Link href="#"> <i className="fa-brands fa-x-twitter"></i></Link>
								</li>
								<li>
									<Link href="#"> <i className="fab fa-youtube"></i></Link>
								</li>
								<li>
									<Link href="#"> <i className="fab fa-linkedin"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>Our Services</h3>
							</div>
							<ul className="footer-quick-links">
								<li><Link href="#">Startup Solutions</Link></li>
								<li><Link href="#">Web Development</Link></li>
								<li><Link href="#">Networking Services</Link></li>
								<li><Link href="#">SEO Optimization</Link></li>
								<li><Link href="#">Apps Development</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>Useful Links</h3>
							</div>
							<ul className="footer-quick-links">
								<li><Link href="/about">About Us</Link></li>
								<li><Link href="/portfolio">Case Study</Link></li>
								<li><Link href="/contact">Contact Us</Link></li>
								<li><Link href="/privacy-policy">Privacy Policy</Link></li>
								<li><Link href="/terms-condition">Terms & Conditions</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>Contact Info</h3>
							</div>
							<div className="footer-info-contact">
								<i className="flaticon-phone-call"></i>
								<h3>Phone</h3>
								<span><Link href="tel:12345678">080 707 555-321</Link></span>
							</div>
							<div className="footer-info-contact">
								<i className="flaticon-envelope"></i>
								<h3>Email</h3>
								<span><Link href="mailto:demo@example.com">demo@example.com</Link></span>
							</div>
							<div className="footer-info-contact">
								<i className="flaticon-placeholder"></i>
								<h3>Address</h3>
								<span>526  Melrose Street, Water Mill, 11976  New York</span>
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

export default Footer