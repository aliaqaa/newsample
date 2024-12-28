import CoursesTopSort from '@/components/modules/CoursesTopSort/CoursesTopSort'
import React, { useState } from 'react'

function CoursePagination() {
    const [grid,setGrid] = useState('grid')
  return (
    <div className='flex w-full'>
        <div className='flex flex-col'>
        <CoursesTopSort setGrid={setGrid}/>

        </div>
    
    
    </div>
  )
}

export default CoursePagination