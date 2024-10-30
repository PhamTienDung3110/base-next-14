import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function MainHome() {
  return (
    <>
	<div className="home-section home-2">
		<div className="d-table">
			<div className="d-table-cell">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="main-banner-content">
								<h6 className="text-gradient">Quality IT Service</h6> 
								<h1>Your Successful Business, Our Fantastic <span className="text-gradient">IT Support.</span></h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</p>
								<div className="banner-btn">
									<Link className="default-btn-one" href="/services">Our Service <span></span></Link>
									<div className="video-box">
										<Link href="https://www.youtube.com/watch?v=G9TdA8d5aaU" className="popup-video video-btn"> <i className="fa fa-play"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="banner-image">
								<Image width={584} height={491} src="/img/home-font-2.png" alt="image"/>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
		<div className="home-shape-animation">
			<div className="shape-1">
				<Image width={23} height={23} src="/img/shape/1.png" alt="shape image"/>
			</div>
			<div className="shape-2">
				<Image width={51} height={46} src="/img/shape/2.png" alt="shape image"/>
			</div>
			<div className="shape-3">
				<Image width={18} height={18} src="/img/shape/3.png" alt="shape image"/>
			</div>
			<div className="shape-4">
				<Image width={12} height={11} src="/img/shape/4.png" alt="shape image"/>
			</div>
			<div className="shape-5">
				<Image width={120} height={120} src="/img/shape/5.png" alt="shape image"/>
			</div>
			<div className="shape-6">
				<Image width={15} height={15} src="/img/shape/6.png" alt="shape image"/>
			</div>
			<div className="shape-7">
				<Image width={30} height={30} src="/img/shape/7.png" alt="shape image"/>
			</div>
		</div>
	</div>
    </>
  );
}

export default MainHome;
