import Link from 'next/link'
import React from 'react'

const MyHeader = () => {
  return (
    <header>
    <div className="text-center bg-slate-800 p-2 mb-2">
      <Link href="/">
        <h1 className="text-2xl text-white font-bold">Palldanerar's Blog</h1>
      </Link>
      <p className="text-slate-300">Traveler, welcome to my blog!</p>
    </div>
  </header>
  )
}

export default MyHeader