import { Link } from '@/i18n/routing'
import React from 'react'

function TitleServices() {
  return (
    <>
      <div className="page-title-area item-bg3">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="page-title-content">
	    					<h2>Services</h2>
	    					<ul>
	    						<li><Link href="/">Home</Link></li>
	    						<li>Services 3</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </>
  )
}

export default TitleServices