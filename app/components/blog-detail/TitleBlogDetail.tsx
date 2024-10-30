import { Link } from '@/i18n/routing'
import React from 'react'

function TitleBlogDetail() {
  return (
    <>
      <div className="page-title-area item-bg1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Blog Details</h2>
                <ul>
                  <li><Link href="/">Home</Link>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleBlogDetail