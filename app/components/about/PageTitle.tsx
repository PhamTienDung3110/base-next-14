import { Link } from "@/i18n/routing";
import React from "react";

function PageTitle() {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTitle;
