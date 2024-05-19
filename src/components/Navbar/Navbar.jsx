import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import HomeMiniCard from "../Home/HomeMiniCard";
import { baseApi } from "../../api/axiosInstance";

const Navbar = () => {
  const [search, setSearch] = useState("")
  const [searchList, setSearchList] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const searchFunction = async () => {
    try {
      const response = await baseApi.get(`/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
      console.log(response.data.results)
      setSearchList(response.data.results)
    } catch {
      err => console.log("search fetch error", err)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      searchFunction()
    }, [500])
    return () => clearTimeout(timeOut)
  }, [search])


  return (
    <nav className='z-50 h-[80px] bg-[#121212] fixed top-0 w-full items-center flex justify-between md:flex'>
      <div className=' flex items-center gap-4 m-auto px-2 py-2 w-[60%] text-[24px] font-bold '>
        <Link to="/"><button className='bg-[#f5c518] text-black m-2 rounded-md'>IMDb</button></Link>
        <div className='flex items-center text-[18px]'><FiAlignJustify />Menu</div>
        <div className='flex outline-none p-2 bg-white h-[40px] items-center text-[18px] md:w '>
          <div className='text-black m-3'>All</div>
          <div className="">
            <input type='text' onChange={handleSearch} value={search} placeholder='Search IMDb' className=' text-black font-medium w-[600px] ' />
            {search.length > 0 && searchList.length > 0 &&
              <div
                onClick={() => setSearch("")}
                className="fixed z-50 mt-2 max-w-[500px] max-h-[500px] _trailerRightgradient p-4 overflow-auto">
                <div className=' flex flex-col gap-5'>
                  {searchList && searchList.map((movie, ind) => (
                    <HomeMiniCard key={movie.id} movies={searchList} item={ind} />
                  ))}
                </div>
              </div>}
          </div>
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
