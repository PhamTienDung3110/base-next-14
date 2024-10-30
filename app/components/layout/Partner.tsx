import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function Partner() {
  return (
    <>
      <section className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <h6 className="sub-title">Trusted By Over 1500</h6>
            <h2>Our Customers</h2>
          </div>
          <div className="partner-list">
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-1.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-2.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-3.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-4.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-5.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-6.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-7.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-8.png" alt="image" />
              </Link>
            </div>
            <div className="partner-item">
              <Link href="#0">
                <Image width={197} height={122} src="/img/partner/client-1.png" alt="image" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partner;
