import React from "react";

function Navbar() {
  return (
    <>
      {/* Start Navbar Section */}
      <div className="navbar-section">
        <div className="techvio-responsive-nav">
          <div className="container">
            <div className="techvio-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img src="/img/logo.png" className="white-logo" alt="logo" />
                  <img
                    src="/img/logo-black.png"
                    className="black-logo"
                    alt="logo"
                  />
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
                <img
                  src="/img/logo-black.png"
                  className="black-logo"
                  alt="logo"
                />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          Home 1
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          Home 2
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Home 3
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-4.html" className="nav-link">
                          Home 4
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-5.html" className="nav-link">
                          Home 5
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-6.html" className="nav-link">
                          Home 6
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about.html" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          Services 1
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="services-2.html" className="nav-link">
                          Services 2
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="services-3.html" className="nav-link">
                          Services 3
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-services.html" className="nav-link">
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Portfolio <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="portfolio.html" className="nav-link">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-portfolio.html" className="nav-link">
                          Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about.html" className="nav-link">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="error-404.html" className="nav-link">
                          404 Error
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-condition.html" className="nav-link">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-2.html" className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-blog.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="other-option">
                  <a className="default-btn" href="mailto:demo@example.com">
                    Get It Support <span></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End Navbar Section */}
    </>
  );
}

export default Navbar;
