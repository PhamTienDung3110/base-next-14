import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function Services() {
  return (
    <>
	<section className="services-section-two section-padding">
		<div className="container">
			<div className="row">
                <div className="col-md-12">
					<div className="section-title">
						<h6 className="sub-title">What We Provide</h6>
						<h2>Our Services</h2>
					</div>
                </div>
				<div className="col-lg-4 col-md-6">
					<div className="single-services-two-item">
						<div className="services-icon-box">
							<div className="default-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-1.svg" alt="svg icon"/>
							</div>
							<div className="hover-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-hover-1.svg" alt="svg icon"/>
							</div>
						</div>
						<div className="services-two-content">
							<h3>IT Consulting</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
							<div className="services-btn">
								<Link href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-services-two-item">
						<div className="services-icon-box">
							<div className="default-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-2.svg" alt="svg icon"/>
							</div>
							<div className="hover-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-hover-2.svg" alt="svg icon"/>
							</div>
						</div>
						<div className="services-two-content">
							<h3>Cloud Solutions</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
							<div className="services-btn">
								<Link href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-services-two-item">
						<div className="services-icon-box">
							<div className="default-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-3.svg" alt="svg icon"/>
							</div>
							<div className="hover-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-hover-3.svg" alt="svg icon"/>
							</div>
						</div>
						<div className="services-two-content">
							<h3>Managed IT Service</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
							<div className="services-btn">
								<Link href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-services-two-item">
						<div className="services-icon-box">
							<div className="default-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-4.svg" alt="svg icon"/>
							</div>
							<div className="hover-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-hover-4.svg" alt="svg icon"/>
							</div>
						</div>
						<div className="services-two-content">
							<h3>Responsive Design</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
							<div className="services-btn">
								<Link href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-services-two-item">
						<div className="services-icon-box">
							<div className="default-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-5.svg" alt="svg icon"/>
							</div>
							<div className="hover-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-hover-5.svg" alt="svg icon"/>
							</div>
						</div>
						<div className="services-two-content">
							<h3>Cyber Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
							<div className="services-btn">
								<Link href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-services-two-item">
						<div className="services-icon-box">
							<div className="default-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-6.svg" alt="svg icon"/>
							</div>
							<div className="hover-icon">
								<Image width={50} height={50} src="/img/icon/services-icon-hover-6.svg" alt="svg icon"/>
							</div>
						</div>
						<div className="services-two-content">
							<h3>Solving IT Problems</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
							<div className="services-btn">
								<Link href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  );
}

export default Services;
