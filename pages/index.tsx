import Link from 'next/link'
import React from 'react'

function index() {
  return (<>
  <Link href="/auth">login</Link>
    <div>index</div>
  </>
  )
}

export default index