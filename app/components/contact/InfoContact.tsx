import Link from 'next/link'
import React from 'react'

function InfoContact() {
  return (
    <>
      <section className="contact-info-wrapper bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Find Us</h6>
                <h2>Contact Info</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-content">
                <h5>USA Headquarter</h5>
                <p>304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B Overlook Drive Chester, PA 19013, Flemingsburg USA.</p>
                <Link href="tel:12345678">080 707 555-321</Link>
                <Link href="mailto:demo@example.com">demo@example.com</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-content">
                <h5>New York Office</h5>
                <p>1540 Pecks Ridge Tilton Rd Flemingsburg, Kentucky(KY), 4104188 Fulton Street Blackwood, NJ 08012, London.</p>
                <Link href="tel:12345678">080 707 555-321</Link>
                <Link href="mailto:demo@example.com">demo@example.com</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-content">
                <h5>Panama Office</h5>
                <p>103 Richard Ave Ashville, Ohio, Water Mill,3468 16th Hwy Pangburn, Arkansas(AR), Charolais Ashville, Virginia, Panama.</p>
                <Link href="tel:12345678">080 707 555-321</Link>
                <Link href="mailto:demo@example.com">demo@example.com</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InfoContact