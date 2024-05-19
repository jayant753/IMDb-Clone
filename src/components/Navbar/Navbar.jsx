import { FiAlignJustify } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='z-50 h-[80px] bg-[#121212] fixed top-0 w-full items-center flex justify-between md:flex'>
      <div className=' flex items-center gap-4 m-auto px-2 py-2 w-[60%] text-[24px] font-bold '>
        <Link to="/"><button className='bg-[#f5c518] text-black m-2 rounded-md'>IMDb</button></Link>
        <div className='flex items-center text-[18px]'><FiAlignJustify />Menu</div>
        <div className='flex outline-none p-2 bg-white h-[40px] items-center text-[18px] md:w '>
          <div className='text-black m-3'>All</div>
          <input type='text' placeholder='Search IMDb' className='w-[600px] '></input>
          <a href='#'><button className='bg-white text-black '><IoMdSearch /></button></a>
        </div>
        <div className='flex text-[18px] gap-5 items-center'>
          <div className='flex items-center'>IMDb<span className='text-[#077790]'>Pro</span></div>
          <Link to="/signIn"><div className='flex items-center gap-1'>Sign <span>In</span></div></Link>
          <div>lang</div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;
