import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

function AboutHome() {
  return (
    <>
	<section className="about-area bg-grey section-padding">
		<div className="container">
			<div className="row d-flex align-items-center">
				<div className="col-lg-6 col-md-12">
					<div className="about-content">
						<h6 className="sub-title">About Our Company</h6> 
						<h2>Providing Your Business With A Quality IT Service is Our Passion</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<div className="about-btn-box"> 
							<Link className="default-btn" href="/about">Learn More <span></span></Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="about-image">
						<Image width={636} height={532} src="/img/about-2.png" alt="About image"/>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default AboutHome