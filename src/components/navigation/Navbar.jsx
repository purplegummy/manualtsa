import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="flex flex-row h-20 w-full bg-neutral-200 justify-between p-6">
      <div className="">Logo</div>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Competitions</Link>
        <Link to="/">Awards</Link>
        <Link to="/">Contact</Link>
      </div>

    </div>
  )
}
