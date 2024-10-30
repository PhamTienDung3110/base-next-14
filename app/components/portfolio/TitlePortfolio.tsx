import { Link } from '@/i18n/routing'
import React from 'react'

function TitlePortfolio() {
  return (
    <>
	    <div className="page-title-area">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="page-title-content">
	    					<h2>Portfolio</h2>
	    					<ul>
	    						<li><Link href="/">Home</Link></li>
	    						<li>Portfolio</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </>
  )
}

export default TitlePortfolio