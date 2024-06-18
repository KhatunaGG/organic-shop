import { Hero, Intro, Nav } from '@/app/components'
import FavoritesSection from '@/app/components/FavoritesSection/FavoritesSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Intro />
      {/* <SignSection /> */}
      <Nav />
      <Hero />
      <div className='w-full px-[3%] lg:px-[7%]'>
        <FavoritesSection />
      </div>
    </div>
  )
}
