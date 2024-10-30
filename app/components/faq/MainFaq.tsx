import Link from 'next/link'
import React from 'react'

function MainFaq() {
  return (
    <>
	    <section className="faq-section section-padding">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-10 offset-lg-1">
	    				<div className="faq-accordion first-faq-box">
	    					<ul className="accordion">
	    						<li className="accordion-item">
	    							<Link className="accordion-title active" href="javascript:void(0)"> <i className="fa fa-plus"></i> How long does a website redesign take?</Link>
	    							<p className="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</p>
	    						</li>
	    						<li className="accordion-item">
	    							<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> What happens if my site breaks?</Link>
	    							<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</p>
	    						</li>
	    						<li className="accordion-item">
	    							<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> What is the difference between my CMS, DNS, hosting, FTP, etc.?</Link>
	    							<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</p>
	    						</li>
	    						<li className="accordion-item">
	    							<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> Can you handle ongoing maintenance?</Link>
	    							<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</p>
	    						</li>
	    						<li className="accordion-item">
	    							<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> Do you only create WordPress websites?</Link>
	    							<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</p>
	    						</li>
	    						<li className="accordion-item">
	    							<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> Can I update the website myself once it’s built?</Link>
	    							<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.</p>
	    						</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
    </>
  )
}

export default MainFaq