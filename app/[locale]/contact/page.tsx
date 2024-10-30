import InfoContact from '@/app/components/contact/InfoContact'
import MainContact from '@/app/components/contact/MainContact'
import MapContract from '@/app/components/contact/MapContract'
import TitleContact from '@/app/components/contact/TitleContact'
import React from 'react'

function page() {
  return (
    <div>
      <TitleContact />
      <MainContact />
      <InfoContact />
      <MapContract />
    </div>
  )
}

export default page