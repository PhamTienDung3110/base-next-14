import { Link } from '@mui/material'
import React from 'react'

function Hire() {
  return (
    <>
	<section className="hire-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-md-12">
					<div className="hire-content">
						<h6 className="sub-title">Want to work with us?</h6>
						<h2>Digitally Transform & Grow Your Business</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.</p>
						<div className="hire-btn">
							<Link className="default-btn" href="tel:12345678">Call Now<span></span></Link>
							<Link className="default-btn-one" href="contact.html">Contact Us<span></span></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Hire