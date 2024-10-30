import { Link } from '@/i18n/routing'
import React from 'react'

function MainBlogDetail() {
  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src="/img/blog-details/1.jpg" alt="image"/>
                </div>
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li> <span>Posted On:</span>  <Link href="#">June 10 - 2024</Link></li>
                      <li> <span>Posted By:</span>  <Link href="#">Herman Boone</Link></li>
                    </ul>
                  </div>
                  <h3>Planning for a Safe Return to the Workplace IT Solutions</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                  <ul className="wp-block-gallery columns-2">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/img/blog-details/2.jpg" alt="image"/>
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/img/blog-details/3.jpg" alt="image"/>
                      </figure>
                    </li>
                  </ul>
                  <h3>Increase The Profitability, Availability Of Your Business</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                </div>
                <div className="article-footer">
                  <div className="article-tags"> <span>Tag:</span>
                    <Link href="#">Solutions</Link>
                    <Link href="#">Guide</Link>
                  </div>
                  <div className="article-share">
                    <ul className="social">
                      <li><span>Share:</span></li>
                      <li><Link href="#"> <i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="#"> <i className="fa-brands fa-x-twitter"></i></Link></li>
                      <li><Link href="#"> <i className="fab fa-instagram"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#"><i className="fa fa-arrow-left"></i> Prev Post</Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">Next Post <i className="fa fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h3 className="comments-title">3 Comments:</h3>
                  <ol className="comment-list">
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img src="/img/client/1.jpg" className="avatar" alt="image"/> <b className="fn">Wilson Swanson</b>
                              <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            <Link href="#">
                              <span>June 15 - 2024 12:30 PM</span>
                            </Link>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <div className="reply"> <Link href="#" className="comment-reply-link">Reply</Link>
                        </div>
                      </article>
                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img src="/img/client/2.jpg" className="avatar" alt="image"/> <b className="fn">Ella Hodges</b>
                                  <span className="says">says:</span>
                              </div>
                              <div className="comment-metadata">
                                <Link href="#">
                                  <span>June 15 - 2024 12:30 PM</span>
                                </Link>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <div className="reply"> <Link href="#" className="comment-reply-link">Reply</Link>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img src="/img/client/4.jpg" className="avatar" alt="image"/> <b className="fn">Melissa Bryant</b>
                              <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            <Link href="#">
                              <span>June 15 - 2024 12:30 PM</span>
                            </Link>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <div className="reply"><Link href="#" className="comment-reply-link">Reply</Link></div>
                      </article>
                    </li>
                  </ol>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    <form className="comment-form">
                      <p className="comment-notes"> <span id="email-notes">Your email address will not be published.</span>
                        Required fields are marked <span className="required">*</span>
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea name="comment" id="comment" cols={45} rows={5} maxLength={65525} required></textarea>
                      </p>
                      <p className="comment-form-author">
                        <label>Name <span className="required">*</span>
                        </label>
                        <input type="text" id="author" name="author" required/>
                      </p>
                      <p className="comment-form-email">
                        <label>Email <span className="required">*</span>
                        </label>
                        <input type="email" id="email" name="email" required/>
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url"/>
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent"/>
                          <label>Save my name, email, and website in this browser for the next time I comment.</label>
                      </p>
                      <p className="form-submit">
                        <input type="submit" name="submit" id="submit" className="submit" value="Post Comment"/>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area" id="secondary">
                <section className="widget widget_search">
                  <form className="search-form search-top">
                    <label>
                      <input type="search" className="search-field" placeholder="Search..."/>
                    </label>
                    <button type="submit"> <i className="fas fa-search"></i></button>
                  </form>
                </section>
                <section className="widget widget_techvio_posts_thumb">
                  <h3 className="widget-title">Popular Posts</h3>
                  <article className="item">
                    <Link href="#" className="thumb">
                      <img src="/img/blog/blog-1.jpg" alt="image"/>
                    </Link>
                    <div className="info">
                      <span>June 10, 2024</span>
                      <h4 className="title usmall">
                        <Link href="#">Planning for a Safe Return to the Workplace IT Solutions</Link>
                      </h4>
                    </div>
                  </article>
                  <article className="item">
                    <Link href="#" className="thumb">
                      <img src="/img/blog/blog-2.jpg" alt="image"/>
                    </Link>
                    <div className="info">
                      <span>June 15, 2024</span>
                      <h4 className="title usmall">
                        <Link href="#">Announcing Our New Smiles for Success Charity</Link>
                      </h4>
                    </div>
                  </article>
                  <article className="item">
                    <Link href="#" className="thumb">
                      <img src="/img/blog/blog-3.jpg" alt="image"/>
                    </Link>
                    <div className="info">
                      <span>June 25, 2024</span>
                      <h4 className="title usmall">
                        <Link href="#">Machine Learning Applications for Every Industry</Link>
                      </h4>
                    </div>
                  </article>
                </section>
                <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li><Link href="#">Business <span className="categories-link-count"> (33)</span></Link></li>
                    <li><Link href="#">Solutions <span className="categories-link-count"> (45)</span></Link></li>
                    <li><Link href="#">Technology <span className="categories-link-count"> (20)</span></Link></li>
                    <li><Link href="#">Digital Marketing <span className="categories-link-count"> (15)</span></Link></li>
                    <li><Link href="#">Graphic Design <span className="categories-link-count"> (7)</span></Link></li>
                  </ul>
                </section>
                <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>
                  <div className="tagcloud">
                    <Link href="#">Web Design</Link>
                    <Link href="#">Responsive</Link>
                    <Link href="#">Applications</Link>
                    <Link href="#">Solutions</Link>
                    <Link href="#">Industry</Link>
                    <Link href="#">Marketing</Link>
                    <Link href="#">Development</Link>
                    <Link href="#">Startup</Link>
                    <Link href="#">Graphic Design</Link>
                    <Link href="#">SEO</Link>
                    <Link href="#">Data Security</Link>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainBlogDetail