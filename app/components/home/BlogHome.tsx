import Image from 'next/image'
import React from 'react'

function BlogHome() {
  return (
    <>
    	<section className="blog-section bg-grey pt-100 pb-70">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h6 className="sub-title">Blog & Article</h6>
						<h2>Recent Blog</h2>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="blog-single-item">
						<div className="blog-image">
							<a href="single-blog.html">
								<Image width={416} height={288} src="/img/blog/blog-1.jpg" alt="image"/>
							</a>
						</div>
						<div className="blog-description">
							<ul className="blog-info">
								<li>
									<a href="#"><i className="bi bi-person-circle"></i> Author</a>
								</li>
								<li>
									<a href="#"><i className="bi bi-calendar-check"></i> 17 June 2024</a>
								</li>
							</ul>
							<div className="blog-text">
								<h3>
                                    <a href="single-blog.html">
										Planning for a Safe Return to the Workplace IT Solutions
                                    </a>
                                </h3>
								<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
								<div className="blog-btn"> <a href="single-blog.html" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="blog-single-item">
						<div className="blog-image">
							<a href="single-blog.html">
								<Image width={416} height={288} src="/img/blog/blog-2.jpg" alt="image"/>
							</a>
						</div>
						<div className="blog-description">
							<ul className="blog-info">
								<li>
									<a href="#"><i className="bi bi-person-circle"></i> Author</a>
								</li>
								<li>
									<a href="#"><i className="bi bi-calendar-check"></i> 20 June 2024</a>
								</li>
							</ul>
							<div className="blog-text">
								<h3>
									<a href="single-blog.html">
                                       Announcing Our New Smiles for Success Charity
                                    </a>
								</h3>
								<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
								<div className="blog-btn">
									<a href="single-blog.html" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="blog-single-item">
						<div className="blog-image">
							<a href="single-blog.html">
								<Image width={416} height={288} src="/img/blog/blog-3.jpg" alt="image"/>
							</a>
						</div>
						<div className="blog-description">
							<ul className="blog-info">
								<li>
									<a href="#"><i className="bi bi-person-circle"></i> Author</a>
								</li>
								<li>
									<a href="#"><i className="bi bi-calendar-check"></i> 25 June 2024</a>
								</li>
							</ul>
							<div className="blog-text">
								<h3>
                                    <a href="single-blog.html">
                                        Machine Learning Applications for Every Industry
                                    </a>
                                </h3>
								<p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
								<div className="blog-btn">
									<a href="single-blog.html" className="read-more"><i className="bi bi-arrow-right-short"></i> Read More</a>
								</div>
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

export default BlogHome