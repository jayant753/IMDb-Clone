// import { useState } from "react"
// import React from 'react'
// import { collection, addDoc, query, onSnapshot, QuerySnapshot } from "../../../utils/fireBase";
//import { db } from "../../../utils/fireBase";
import FormInput from "../signIn/FormInput";
import { BsInfo } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";

const SignUp = () => {
  //   const[formData, setFormData] = useState({
  //     name:'',
  //     email:'',
  //     password:''
  // });

  //   const[user, setUsers] = useState([]);

  //     const handleSubmit = (e)=>{
  //         e.preventDeafult();
  //         console.log(formData);
  //     }

  //     const handleInputChange = (event)=>{
  //         const {name, value} = event.target();
  //         setFormData({...formData, [name]: value})
  //     }

  //     const getAllUsers = async()=>{
  //         const q = query(collection(db, "user"))
  //         const users = onSnapshot(q, (QuerySnapshot)=>{
  //             let userArray = [];
  //             QuerySnapshot.forEach((doc)=>{
  //                 userArray.push({...doc.data(), id : doc.id})
  //             })
  //             setUsers(userArray);
  //         })
  //     }

  //     console.log("USER", user);




  return (
    <div className="bg-white text-black justify-center items-center p-2 w-[30%]">
      <div className='justify-center items-center bg-cover'>
        <Link to="/"><button className="bg-[#f5c518] text-black font-bold p-1 text-[24px] rounded-md">
          IMDb
        </button></Link>
      </div>
      <div>
        <FormInput labelText={"Your name"} inputType={"text"} inputPlaceholder={"First and last name"} required={true} />
        <FormInput labelText={"Email"} inputType={"email"} inputPlaceholder={""} required={true} />
        <FormInput labelText={"Password"} inputType={"password"} inputPlaceholder={"at least 8 chracters"} required={true} />
        <p className="flex items-center"><span className="text-[#4995b3]"><BsInfo /></span> Password must be at least 8 characters</p>
        <FormInput labelText={"Re-enter password"} inputType={"password"} inputPlaceholder={""} required={"true"} />
      </div>
      <div>
        <button className="bg-[#f5c518] text-black p-1 rounded-md">
          Create your IMDb account
        </button>
      </div>
      <div>
        <p className="flex ">Already have an account?<Link to="/signIn"><span className="text-[#75b2fe] flex">Sign In <MdArrowRight /></span></Link></p>
      </div>

    </div>
  )
}

export default SignUp;
