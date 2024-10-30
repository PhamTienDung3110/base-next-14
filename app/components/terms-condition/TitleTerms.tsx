import { Link } from '@/i18n/routing'
import React from 'react'

function TitleTerms() {
  return (
    <>
	    <div className="page-title-area item-bg1">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="page-title-content">
	    					<h2>Terms & Conditions</h2>
	    					<ul>
	    						<li><Link href="/">Home</Link>
	    						</li>
	    						<li>Terms & Conditions</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </>
  )
}

export default TitleTerms