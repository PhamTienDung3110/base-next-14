import React from "react";
import Image from 'next/image';
import { Link } from "@/i18n/routing";

function Feature() {
  return (
    <>
      <section className="feature-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-single-item">
                <Image width={85} height={85} src="/img/icon/feature-icon-1.svg" alt="icon" />
                <h3>Flexibility & Responsive</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam
                </p>
                <div className="feature-btn-box">
                  <Link href="#" className="read-more">
                    <i className="bi bi-arrow-right-short"></i> Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-single-item">
                <Image width={85} height={85} src="/img/icon/feature-icon-2.svg" alt="icon" />
                <h3>Dedicated Teams</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam
                </p>
                <div className="feature-btn-box">
                  <Link href="#" className="read-more">
                    <i className="bi bi-arrow-right-short"></i> Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-single-item">
                <Image width={85} height={85} src="/img/icon/feature-icon-3.svg" alt="icon" />
                <h3>Focusing on Business</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam
                </p>
                <div className="feature-btn-box">
                  <Link href="#" className="read-more">
                    <i className="bi bi-arrow-right-short"></i> Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
