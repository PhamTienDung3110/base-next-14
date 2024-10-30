import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

function MainBlog() {
  return (
    <div>
	    <section className="blog-section section-padding">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-4 col-md-6">
	    				<div className="blog-single-item">
	    					<div className="blog-image">
	    						<Link href="/blog-detail">
	    							<Image width={416} height={288} src="/img/blog/blog-1.jpg" alt="image"/>
	    						</Link>
	    					</div>
	    					<div className="blog-description">
	    						<ul className="blog-info">
	    							<li>
	    								<Link href="#"><i className="bi bi-person-circle"></i> Author</Link>
	    							</li>
	    							<li>
	    								<Link href="#"><i className="bi bi-calendar-check"></i> 17 June 2024</Link>
	    							</li>
	    						</ul>
	    						<div className="blog-text">
	    							<h3>
                                        <Link href="/blog-detail">
	    									Planning for a Safe Return to the Workplace IT Solutions
                                        </Link>
                                    </h3>
	    							<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
	    							<div className="blog-btn"> <Link href="/blog-detail" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-4 col-md-6">
	    				<div className="blog-single-item">
	    					<div className="blog-image">
	    						<Link href="/blog-detail">
	    							<Image width={636} height={477} src="/img/blog/blog-2.jpg" alt="image"/>
	    						</Link>
	    					</div>
	    					<div className="blog-description">
	    						<ul className="blog-info">
	    							<li>
	    								<Link href="#"><i className="bi bi-person-circle"></i> Author</Link>
	    							</li>
	    							<li>
	    								<Link href="#"><i className="bi bi-calendar-check"></i> 20 June 2024</Link>
	    							</li>
	    						</ul>
	    						<div className="blog-text">
	    							<h3>
	    								<Link href="/blog-detail">
                                           Announcing Our New Smiles for Success Charity
                                        </Link>
	    							</h3>
	    							<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
	    							<div className="blog-btn">
	    								<Link href="/blog-detail" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-4 col-md-6">
	    				<div className="blog-single-item">
	    					<div className="blog-image">
	    						<Link href="/blog-detail">
	    							<Image width={636} height={477} src="/img/blog/blog-3.jpg" alt="image"/>
	    						</Link>
	    					</div>
	    					<div className="blog-description">
	    						<ul className="blog-info">
	    							<li>
	    								<Link href="#"><i className="bi bi-person-circle"></i> Author</Link>
	    							</li>
	    							<li>
	    								<Link href="#"><i className="bi bi-calendar-check"></i> 25 June 2024</Link>
	    							</li>
	    						</ul>
	    						<div className="blog-text">
	    							<h3>
                                        <Link href="/blog-detail">
                                            Machine Learning Applications for Every Industry
                                        </Link>
                                    </h3>
	    							<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
	    							<div className="blog-btn"> <Link href="/blog-detail" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-4 col-md-6">
	    				<div className="blog-single-item">
	    					<div className="blog-image">
	    						<Link href="/blog-detail">
	    							<Image width={636} height={477} src="/img/blog/blog-4.jpg" alt="image"/>
	    						</Link>
	    					</div>
	    					<div className="blog-description">
	    						<ul className="blog-info">
	    							<li>
	    								<Link href="#"><i className="bi bi-person-circle"></i> Author</Link>
	    							</li>
	    							<li>
	    								<Link href="#"><i className="bi bi-calendar-check"></i> 27 June 2024</Link>
	    							</li>
	    						</ul>
	    						<div className="blog-text">
	    							<h3>
                                        <Link href="/blog-detail">
	    									5 Technology Considerations for Office Relocations
                                        </Link>
                                    </h3>
	    							<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
	    							<div className="blog-btn"> <Link href="/blog-detail" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-4 col-md-6">
	    				<div className="blog-single-item">
	    					<div className="blog-image">
	    						<Link href="/blog-detail">
	    							<Image width={636} height={477} src="/img/blog/blog-5.jpg" alt="image"/>
	    						</Link>
	    					</div>
	    					<div className="blog-description">
	    						<ul className="blog-info">
	    							<li>
	    								<Link href="#"><i className="bi bi-person-circle"></i> Author</Link>
	    							</li>
	    							<li>
	    								<Link href="#"><i className="bi bi-calendar-check"></i> 28 June 2024</Link>
	    							</li>
	    						</ul>
	    						<div className="blog-text">
	    							<h3>
	    								<Link href="/blog-detail">
                                           Everything you need to know about geo-blocking
                                        </Link>
	    							</h3>
	    							<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
	    							<div className="blog-btn">
	    								<Link href="/blog-detail" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-4 col-md-6">
	    				<div className="blog-single-item">
	    					<div className="blog-image">
	    						<Link href="/blog-detail">
	    							<Image width={636} height={477} src="/img/blog/blog-6.jpg" alt="image"/>
	    						</Link>
	    					</div>
	    					<div className="blog-description">
	    						<ul className="blog-info">
	    							<li>
	    								<Link href="#"><i className="bi bi-person-circle"></i> Author</Link>
	    							</li>
	    							<li>
	    								<Link href="#"><i className="bi bi-calendar-check"></i> 30 June 2024</Link>
	    							</li>
	    						</ul>
	    						<div className="blog-text">
	    							<h3>
                                        <Link href="/blog-detail">
	    									Internal or outsourced IT: What’s the best choice?
                                        </Link>
                                    </h3>
	    							<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
	    							<div className="blog-btn"> <Link href="/blog-detail" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</Link>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-12 col-md-12">
	    				<div className="pagination-area"> <Link href="#" className="prev page-numbers"><i className="fas fa-angle-left"></i></Link>
	    					<Link href="#" className="page-numbers">1</Link>
	    					<span className="page-numbers current" aria-current="page">2</span>
	    					<Link href="#" className="page-numbers">3</Link>
	    					<Link href="#" className="page-numbers">4</Link>
	    					<Link href="#" className="next page-numbers"><i className="fas fa-angle-right"></i></Link>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
    </div>
  )
}

export default MainBlog