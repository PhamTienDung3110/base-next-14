import { Link } from '@/i18n/routing'
import React from 'react'

function TitleContact() {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Contact</h2>
                <ul>
                  <li><Link href="/">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleContact