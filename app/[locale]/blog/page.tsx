import MainBlog from '@/app/components/blog/MainBlog'
import TitleBlog from '@/app/components/blog/TitleBlog'
import React from 'react'

function page() {
  return (
    <div>
      <TitleBlog />
      <MainBlog />
    </div>
  )
}

export default page