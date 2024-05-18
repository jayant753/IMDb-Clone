import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-20 mx-20 grid grid-cols-2 ">
      <div className="w-[40%] h-[150px] outline ">
        <div className="my-5 text-[20px] font-bold justify-center px-12 py-2 flex">
          Follow IMDb on social
        </div>
        <div className="flex justify-center gap-7 text-[24px] ">
          <div><FaTiktok/></div>
          <div><FaInstagram/></div>
          <div><FaXTwitter/></div>
          <div><FaYoutube/></div>
          <div><FaFacebookSquare/></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-[40%] h-[150px] outline">
        <div className="">
        <p>Get the IMDb app</p>
        <p>For Android and iOS</p>
        </div>
        <div>
            <img src='' alt='QR'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
