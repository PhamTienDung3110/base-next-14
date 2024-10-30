import Link from 'next/link'
import React from 'react'

function MainCommingSoon() {
  return (
    <>
	    <section className="coming-soon-area">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="coming-soon-content">
	    					<h1>Our website is Coming Soon</h1>
	    					<p>Before we jump into our list of coming soon page examples, let’s take a quick look at why you should create one of these for your own website launch.</p>
	    					<form>
	    						<input type="email" name="email" className="email-input" placeholder="Enter Your Email"/>
	    						<button type="submit" className="submit-btn">Submit</button>
	    					</form>
	    					<div id="timer">
	    						<div id="days"></div>
	    						<div id="hours"></div>
	    						<div id="minutes"></div>
	    						<div id="seconds"></div>
	    					</div>
	    					<ul className="social-list">
	    						<li className="list-heading">Follow us for update:</li>
	    						<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
	    						<li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
	    						<li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
	    						<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
    </>
  )
}

export default MainCommingSoon