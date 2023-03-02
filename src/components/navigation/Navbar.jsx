import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
  return (
    
    <div className="sticky top-0 transition-all text-slate-600 font-poppins flex flex-row h-28 w-full items-center justify-between px-20">
      <div className="">Logo</div>
      <div className="flex flex-row justify-between gap-16">
        <div className="text-lg items-center flex flex-row gap-16 flex-nowrap">
          <Link className="" to="/">Home</Link>
          <Link className="flex flex-nowrap items-center gap-2" to="/">About <FontAwesomeIcon className="text-red-500" icon={faAngleDown} /></Link>
          <Link to="/">Awards</Link>
          <Link to="/">Competitions</Link>
       
          
          

        </div>
        <Link className="rounded-[15px] block h-ful py-2 px-8 bg-[#F12D4C] border-solid border-red-200 border-4 text-white" to="/">Contact</Link>
      </div>
      
    </div>
  )
}
