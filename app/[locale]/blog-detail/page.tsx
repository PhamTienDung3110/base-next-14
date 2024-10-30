import MainBlogDetail from '@/app/components/blog-detail/MainBlogDetail'
import TitleBlogDetail from '@/app/components/blog-detail/TitleBlogDetail'
import React from 'react'

function page() {
  return (
    <div>
      <TitleBlogDetail />
      <MainBlogDetail />
    </div>
  )
}

export default page