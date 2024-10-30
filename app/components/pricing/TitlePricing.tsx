import { Link } from '@/i18n/routing'
import React from 'react'

function TitlePricing() {
  return (
    <>
	    <div className="page-title-area item-bg2">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="page-title-content">
	    					<h2>Pricing Plans</h2>
	    					<ul>
	    						<li><Link href="/">Home</Link>
	    						</li>
	    						<li>Pricing</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </>
  )
}

export default TitlePricing