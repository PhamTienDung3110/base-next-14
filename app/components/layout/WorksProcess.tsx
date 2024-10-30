import Image from "next/image";
import React from "react";

function WorksProcess() {
  return (
    <>
      <section className="workprocess-section bg-grey section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">4 Step Work Process</h6>
                <h2>Working Process</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <Image width={85} height={85} src="/img/icon/workprocess-icon-1.svg" alt="icon" />
                </div>
                <div className="workprocess-info">
                  <h3>Discover</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolore magna aliqua.
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>01</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <Image width={85} height={85} src="/img/icon/workprocess-icon-2.svg" alt="icon" />
                </div>
                <div className="workprocess-info">
                  <h3>Design & Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolore magna aliqua.
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>02</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <Image width={85} height={85} src="/img/icon/workprocess-icon-3.svg" alt="icon" />
                </div>
                <div className="workprocess-info">
                  <h3>Install & Testing</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolore magna aliqua.
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>03</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <Image width={85} height={85} src="/img/icon/workprocess-icon-4.svg" alt="icon" />
                </div>
                <div className="workprocess-info">
                  <h3>Project Delivery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolore magna aliqua.
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksProcess;
