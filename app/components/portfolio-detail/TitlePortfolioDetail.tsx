import { Link } from '@/i18n/routing'
import React from 'react'

function TitlePortfolioDetail() {
  return (
    <>
	    <div className="page-title-area item-bg2">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="page-title-content">
	    					<h2>Portfolios Details</h2>
	    					<ul>
	    						<li><Link href="/">Home</Link></li>
	    						<li>Portfolios Details</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </>
  )
}

export default TitlePortfolioDetail