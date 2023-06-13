import React from 'react'

function tagline({tagtitle,tagdesc}) {
  return (
    <div className='flex gap-28 justify-left  md:ml-80 md:mr-40 mx-10'>
      <p className='w-20 font-semibold'>{tagtitle}</p>
      <p>{tagdesc}</p>
    </div>
  )
}

export default tagline