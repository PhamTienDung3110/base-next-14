
function About() {
  return (
    <div>
      {/* Start Preloader Section */}
      {/* <div className="preloader">
	    	<div className="loader">
	    		<div className="shadow"></div>
	    		<div className="box"></div>
	    	</div>
	    </div> */}
      {/* End Preloader Section */}
      {/* Start Navbar Section */}
      <div className="navbar-section">
        <div className="techvio-responsive-nav">
          <div className="container">
            <div className="techvio-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img src="/img/logo.png" className="white-logo" alt="logo" />
                  <img src="/img/logo-black.png" className="black-logo" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="techvio-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="/img/logo.png" className="white-logo" alt="logo" />
                <img src="/img/logo-black.png" className="black-logo" alt="logo" />
              </a>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">Home <i className="fas fa-chevron-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">Home 1</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">Home 2</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">Home 3</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-4.html" className="nav-link">Home 4</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-5.html" className="nav-link">Home 5</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-6.html" className="nav-link">Home 6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about.html" className="nav-link">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Services <i className="fas fa-chevron-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">Services 1</a>
                      </li>
                      <li className="nav-item">
                        <a href="services-2.html" className="nav-link">Services 2</a>
                      </li>
                      <li className="nav-item">
                        <a href="services-3.html" className="nav-link">Services 3</a>
                      </li>
                      <li className="nav-item">
                        <a href="single-services.html" className="nav-link">Services Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Portfolio <i className="fas fa-chevron-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="portfolio.html" className="nav-link">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a href="single-portfolio.html" className="nav-link">Portfolio Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Pages <i className="fas fa-chevron-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about.html" className="nav-link">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">Team</a>
                      </li>
                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a href="error-404.html" className="nav-link">404 Error</a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">FAQ</a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-condition.html" className="nav-link">Terms & Conditions</a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Blog <i className="fas fa-chevron-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">Blog Grid</a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-2.html" className="nav-link">Blog Right Sidebar</a>
                      </li>
                      <li className="nav-item">
                        <a href="single-blog.html" className="nav-link">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">Contact</a>
                  </li>
                </ul>
                <div className="other-option">
                  <a className="default-btn" href="mailto:demo@example.com">Get It Support <span></span></a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End Navbar Section */}

      {/* Start Page Title Section */}
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>About Us</h2>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Section */}

      {/* Start Feature Section */}
      <section className="feature-section pt-100">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-6">
                      <div className="feature-single-item">
                          <img src="/img/icon/feature-icon-1.svg" alt="icon"/>
                          <h3>Flexibility & Responsive</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
		  				<div className="feature-btn-box"> 
		  					<a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>
		  				</div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="feature-single-item">
                          <img src="/img/icon/feature-icon-2.svg" alt="icon"/>
                          <h3>Dedicated Teams</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
		  				<div className="feature-btn-box"> 
		  					<a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>
		  				</div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="feature-single-item">
                          <img src="/img/icon/feature-icon-3.svg" alt="icon"/>
                          <h3>Focusing on Business</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
		  				<div className="feature-btn-box"> 
		  					<a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>
		  				</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* End Feature Section */}
      {/* Start About Section */}
	    <section className="about-area section-padding">
	    	<div className="container">
	    		<div className="row d-flex align-items-center">
	    			<div className="col-lg-6 col-md-12">
	    				<div className="about-content">
	    					<h6 className="sub-title">About Our Company</h6> 
	    					<h2>Providing Your Business With A Quality IT Service is Our Passion</h2>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim</p>
	    					<div className="skills">
	    						<div className="skill-item">
	    							<h6>IT Consulting <em>90%</em></h6>
	    							<div className="skill-progress">
	    								<div className="progres" data-value="90%"></div>
	    							</div>
	    						</div>
	    						<div className="skill-item">
	    							<h6>Cloud Solutions <em>75%</em></h6>
	    							<div className="skill-progress">
	    								<div className="progres" data-value="75%"></div>
	    							</div>
	    						</div>
	    						<div className="skill-item">
	    							<h6>Managed IT Service <em>85%</em></h6>
	    							<div className="skill-progress">
	    								<div className="progres" data-value="85%"></div>
	    							</div>
	    						</div>
	    					</div>
	    					<div className="about-btn-box"> 
	    						<a className="default-btn" href="about.html">Learn More <span></span></a>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-6 col-md-12">
	    				<div className="about-image">
	    					<img src="/img/about.jpg" alt="About image" />
	    					<div className="years-design">
	    						<h2>23</h2>
	    						<h5>Years Of Experience</h5>
                            </div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
	    {/* End About Section */}
      {/* Start Counter Section */}
	    <section className="counter-area section-padding">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-3 col-md-6 counter-item">
	    				<div className="single-counter">
	    					<div className="counter-contents">
	    						<h2>
	    							<span className="counter-number">23</span>
	    							<span>+</span>
	    						</h2>
	    						<h3 className="counter-heading">Years Helping Business</h3>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6 counter-item">
	    				<div className="single-counter">
	    					<div className="counter-contents">
	    						<h2>
	    							<span className="counter-number">250</span>
	    							<span>+</span>
	    						</h2>
	    						<h3 className="counter-heading">Working Employees</h3>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6 counter-item">
	    				<div className="single-counter">
	    					<div className="counter-contents">
	    						<h2>
	    							<span className="counter-number">4500</span>
	    							<span>+</span>
	    						</h2>
	    						<h3 className="counter-heading">Complete Projects</h3>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6 counter-item">
	    				<div className="single-counter">
	    					<div className="counter-contents">
	    						<h2>
	    							<span className="counter-number">3000</span>
	    							<span>+</span>
	    						</h2>
	    						<h3 className="counter-heading">Happy Customers</h3>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
	    {/* End Counter Section */}
      {/* Start Team Section */}
	    <section className="team-area section-padding">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-md-12">
	    				<div className="section-title">
	    					<h6 className="sub-title">Team Member</h6>
	    					<h2>Expert Team</h2>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<img src="/img/team/team-1.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<a href="#"><i className="fab fa-facebook-f"></i></a>
	    							<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
	    							<a href="#"><i className="fab fa-linkedin"></i></a>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Ava Farrington</h3>
	    						<span>Founder, CEO</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<img src="/img/team/team-2.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<a href="#"><i className="fab fa-facebook-f"></i></a>
	    							<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
	    							<a href="#"><i className="fab fa-linkedin"></i></a>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Kevin Haley</h3>
	    						<span>Co-Founder, CTO</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<img src="/img/team/team-3.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<a href="#"><i className="fab fa-facebook-f"></i></a>
	    							<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
	    							<a href="#"><i className="fab fa-linkedin"></i></a>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Alishia Fulton</h3>
	    						<span>Chief Creative Officer</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<img src="/img/team/team-4.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<a href="#"><i className="fab fa-facebook-f"></i></a>
	    							<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
	    							<a href="#"><i className="fab fa-linkedin"></i></a>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Lucas Martinez</h3>
	    						<span>Creative Director</span>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
	    {/* End Team Section */}
      {/* Start Works Process Section */}
      <section className="workprocess-section bg-grey section-padding">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="section-title">
                          <h6 className="sub-title">4 Step Work Process</h6>
                          <h2>Working Process</h2>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="workprocess-single-item">
                          <div className="workprocess-icon-box">
		  					<img src="/img/icon/workprocess-icon-1.svg" alt="icon"/>
                          </div>
                          <div className="workprocess-info">
                              <h3>Discover</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                          </div>
		  				<div className="workprocess-number-bg"><span>01</span></div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="workprocess-single-item">
                          <div className="workprocess-icon-box">
		  					<img src="/img/icon/workprocess-icon-2.svg" alt="icon"/>
                          </div>
                          <div className="workprocess-info">
                              <h3>Design & Development</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                          </div>
		  				<div className="workprocess-number-bg"><span>02</span></div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="workprocess-single-item">
                          <div className="workprocess-icon-box">
		  					<img src="/img/icon/workprocess-icon-3.svg" alt="icon"/>
                          </div>
                          <div className="workprocess-info">
                              <h3>Install & Testing</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                          </div>
		  				<div className="workprocess-number-bg"><span>03</span></div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="workprocess-single-item">
                          <div className="workprocess-icon-box">
		  					<img src="/img/icon/workprocess-icon-4.svg" alt="icon"/>
                          </div>
                          <div className="workprocess-info">
                              <h3>Project Delivery</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                          </div>
		  				<div className="workprocess-number-bg"><span>04</span></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* End Works Process Section */}
    </div>
  )
}

export default About