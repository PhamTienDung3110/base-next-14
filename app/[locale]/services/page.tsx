import Hire from '@/app/components/layout/Hire'
import Overview from '@/app/components/services/Overview'
import Overview2 from '@/app/components/services/Overview2'
import ThreeSection from '@/app/components/services/ThreeSection'
import TitleServices from '@/app/components/services/TitleServices'
import React from 'react'

function Services() {
  return (
    <div>
      <TitleServices />
      <ThreeSection />
      <Hire />
      <Overview />
      <Overview2 />
    </div>
  )
}

export default Services