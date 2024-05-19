import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <div className="my-20 mx-[100px] grid grid-cols-2 ">
      
      <div className="w-[40%] h-[150px] outline justify-center ">
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
      
        <div className="flex justify-between w-[40%] h-[150px] outline">
        <div className="m-8 py-4 font-bold">
        <p className="text-[18px]">Get the IMDb app</p>
        <p className="text-[#b3b3b3]">For Android and iOS</p>
        </div>
        <div className="m-8 py-4 ">
            <img src='' alt='QR'/>
        </div>
        </div>
      <div className="my-10 mx-20">
        <div className="flex gap-4 my-4 mx-10">
        <div>Help</div>
        <div>Site Index</div>
        <div>IMDbPro</div>
        <div>Box Office Mojo</div>
        <div>License IMDb Data</div>
        </div>
        <div className="flex gap-4 my-4">
        <div>Press Room</div>
        <div>Advertising</div>
        <div>Jobs</div>
        <div>Conditions of Use</div>
        <div>Privacy Policy</div>
        <div>Your ads Privacy Choices</div>
        </div>
      </div>
      </div>
      </div>

  )
}

export default Footer
