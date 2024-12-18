import CourseCategory from '@/components/templates/LandingCourseCategory/CourseCategory'
import LandingFavorite from '@/components/templates/LandingFavorite/LandingFavorite'
import LandingHero from '@/components/templates/LandingHero/LandingHero'
import Link from 'next/link'
import React from 'react'

function index() {
  return (<>
  <LandingHero/>
  <LandingFavorite/>
  <CourseCategory/>
  </>
  )
}

export default index