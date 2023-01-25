import Link from 'next/link'
import React from 'react'

function blogCard({ title, description, date, link }) {
    return (
        <div className='border rounded-md my-4 drop-shadow-md px-4 py-4'>
            <Link href={link} >
                <p className='text-[20px] font-semibold'>{title}</p>
                <p className='opacity-80'>{description}</p>
                <p className='py-2 opacity-80'>{date}</p>
            </Link>
        </div>
    )
}

export default blogCard
