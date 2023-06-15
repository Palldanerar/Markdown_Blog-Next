import Link from 'next/link'
import React from 'react'

const MyHeader = () => {
  return (
    <header>
         <div>
            <Link href='/'>
              <h1>Palldanerar's Blog</h1>
            </Link>
            <p>Traveler, welcome to my personal blog!</p>
        </div>
    </header>
  )
}

export default MyHeader