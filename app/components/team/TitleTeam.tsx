import { Link } from '@/i18n/routing'
import React from 'react'

function TitleTeam() {
  return (
    <>
	    <div className="page-title-area item-bg1">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="page-title-content">
	    					<h2>Our Team</h2>
	    					<ul>
	    						<li><Link href="/">Home</Link>
	    						</li>
	    						<li>Team</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </>
  )
}

export default TitleTeam