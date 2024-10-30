import React from 'react'

function MainContact() {
  return (
    <>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="section-title">
            <h6 className="sub-title">Lets Talk</h6>
            <h2>Contact Us</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form">
                <p className="form-message"></p>
                <form id="contact-form" className="contact-form form" action="phpmails.php" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" required placeholder="Your Name"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="phone" id="phone" required className="form-control" placeholder="Your Phone"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="subject" id="subject" className="form-control" required placeholder="Your Subject"/>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" cols={30} rows={6} required placeholder="Your Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn submit-btn">Send Message <span></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContact