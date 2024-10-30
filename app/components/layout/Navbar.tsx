"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log('pathname', pathname)
  const isLocaleOnlyPath = /^\/(vi|en)(\/)?$/.test(pathname || '');
  return (
    <>
      <div className="navbar-section">
        <div className="techvio-responsive-nav">
          <div className="container">
            <div className="techvio-responsive-menu">
              <div className="logo">
                <Link href="/">
                  <Image width={171} height={35} src="/img/logo.png" className="white-logo" alt="logo" />
                  <Image width={171} height={35}
                    src="/img/logo-black.png"
                    className="black-logo"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={isLocaleOnlyPath ? "techvio-nav index-navber" : "techvio-nav"}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/">
                <Image width={171} height={35} src={isLocaleOnlyPath ? "/img/logo-black.png" : "/img/logo.png"} className="white-logo" alt="logo" />
                <Image width={171} height={35}
                  src="/img/logo-black.png"
                  className="black-logo"
                  alt="logo"
                />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/portfolio" className="nav-link">
                      Portfolio<i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/portfolio" className="nav-link">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/portfolio-detail" className="nav-link">
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Pages <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about" className="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/team" className="nav-link">
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/pricing" className="nav-link">
                          Pricing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/faq" className="nav-link">
                          FAQ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/coming-soon" className="nav-link">
                          Coming Soon
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/terms-condition" className="nav-link">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/privacy-policy" className="nav-link">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog" className="nav-link">
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" className="nav-link">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog-detail" className="nav-link">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="other-option">
                  <Link className="default-btn" href="mailto:demo@example.com">
                    Get It Support <span></span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
