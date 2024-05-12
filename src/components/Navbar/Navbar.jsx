import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { BsBookmarkPlusFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='h-[80px] bg-gray-900 fixed w-full items-center flex justify-between '>
        <div className=' flex items-center gap-4 m-auto px-2 py-2 w-[60%] text-[24px] font-bold '>
          <a href='#'><button className='bg-yellow-400 text-black m-2'>IMDb</button></a>
          <div className='flex items-center text-[18px]'><FiAlignJustify/>Menu</div>
          <div className='flex outline-none p-2 bg-white h-[40px] items-center text-[18px] '>
            <div className='text-black m-3'>All</div>
            <input type='text' placeholder='Search IMDb' className='w-[600px] '></input>
            <a href='#'><button className='bg-white text-black '><IoMdSearch/></button></a>
          </div>
          <div className='flex text-[18px] gap-5'>
            <button className='flex items-center text-[18px]'><BsBookmarkPlusFill/> Watchlist</button>
            <div>Sign In</div>
            <div>lang</div>
          </div>
        </div>
       
    </nav>
  )
}

export default Navbar;
