import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

function MainPortfolio() {
  return (
    <>
      <section className="portfolio-area section-padding">
          <div className="container">
              <div className="row">
		  		<div className="col-md-12">
		  			<div className="section-title">
		  				<h6 className="sub-title">Recent Works</h6>
		  				<h2>Our Portfolio</h2>
		  			</div>
		  		</div>
                  <div className="col-md-12">
                      <div className="portfolio-list">
                          <ul className="nav" id="portfolio-flters">
                              <li className="filter filter-active" data-filter=".all">all</li>
                              <li className="filter" data-filter=".branding">branding</li>
                              <li className="filter" data-filter=".application">application</li>
                              <li className="filter" data-filter=".webdesign">web design</li>
                              <li className="filter" data-filter=".photography">photography</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="portfolio-container">
		  		<div className="row">
                      <div className="col-lg-4 col-md-6 portfolio-grid-item all branding">
                          <div className="portfolio-item">
		  					<Image width={408} height={408} src="/img/portfolio/portfolio-1.jpg" alt="image"/>
                              <div className="portfolio-content-overlay">
		  						<p>App Store | Social Media</p>
		  						<h3><Link href="/portfolio-detail">Creative Web Design</Link></h3>
		  						<Link className="portfolio-link-icon" href="/portfolio-detail"><i className="bi bi-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 portfolio-grid-item all photography">
                          <div className="portfolio-item">
		  					<Image width={408} height={408} src="/img/portfolio/portfolio-2.jpg" alt="image"/>
                              <div className="portfolio-content-overlay">
		  						<p>App Store | Social Media</p>
		  						<h3><Link href="/portfolio-detail">Creative Web Design</Link></h3>
		  						<Link className="portfolio-link-icon" href="/portfolio-detail"><i className="bi bi-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 portfolio-grid-item all branding webdesign">
                          <div className="portfolio-item">
		  					<Image width={408} height={408} src="/img/portfolio/portfolio-3.jpg" alt="image"/>
                              <div className="portfolio-content-overlay">
		  						<p>App Store | Social Media</p>
		  						<h3><Link href="/portfolio-detail">Creative Web Design</Link></h3>
		  						<Link className="portfolio-link-icon" href="/portfolio-detail"><i className="bi bi-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 portfolio-grid-item all webdesign">
                          <div className="portfolio-item">
		  					<Image width={408} height={408} src="/img/portfolio/portfolio-4.jpg" alt="image"/>
                              <div className="portfolio-content-overlay">
		  						<p>App Store | Social Media</p>
		  						<h3><Link href="/portfolio-detail">Creative Web Design</Link></h3>
		  						<Link className="portfolio-link-icon" href="/portfolio-detail"><i className="bi bi-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 portfolio-grid-item all application">
                          <div className="portfolio-item">
		  					<Image width={408} height={408} src="/img/portfolio/portfolio-5.jpg" alt="image"/>
                              <div className="portfolio-content-overlay">
		  						<p>App Store | Social Media</p>
		  						<h3><Link href="/portfolio-detail">Creative Web Design</Link></h3>
		  						<Link className="portfolio-link-icon" href="/portfolio-detail"><i className="bi bi-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 portfolio-grid-item all application photography">
                          <div className="portfolio-item">
		  					<Image width={408} height={408} src="/img/portfolio/portfolio-6.jpg" alt="image"/>
                              <div className="portfolio-content-overlay">
		  						<p>App Store | Social Media</p>
		  						<h3><Link href="/portfolio-detail">Creative Web Design</Link></h3>
		  						<Link className="portfolio-link-icon" href="/portfolio-detail"><i className="bi bi-arrow-right"></i></Link>
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

export default MainPortfolio