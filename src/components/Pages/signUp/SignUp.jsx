import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../../utils/fireBase";
import FormInput from "../signIn/FormInput";
import { BsInfo } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const addUser = async () => {
      await setDoc(doc(db, "user", formData.email), {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addUser();
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 border">
            <div className="bg-white text-black justify-center items-center p-12 mb-20 w-[25%] border border-black-500">
                <div className='justify-center items-center bg-cover'>
                    <Link to="/"><button className="bg-[#f5c518] text-black font-bold p-1 text-[24px] rounded-md justify-center items-center">
                        IMDb
                    </button></Link>
                </div>
                <div><p className='text-[32px]'>Create Account</p></div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <FormInput labelText={"Your name"} inputType={"text"} inputPlaceholder={"First and last name"} required={true} value={formData.name} onChange={handleInputChange} name="name" />
                        <FormInput labelText={"Email"} inputType={"email"} inputPlaceholder={""} required={true} value={formData.email} onChange={handleInputChange} name="email" />
                        <FormInput labelText={"Password"} inputType={"password"} inputPlaceholder={"at least 8 characters"} required={true} value={formData.password} onChange={handleInputChange} name="password" />
                        <p className="flex items-center"><span className="text-[#4995b3]"><BsInfo /></span> Password must be at least 8 characters</p>
                        <FormInput labelText={"Re-enter password"} inputType={"password"} inputPlaceholder={""} required={true} />
                        <button className="bg-[#f5c518] text-black p-1 rounded-md">
                            Create your IMDb account
                        </button>
                    </form>
                </div>
                <div>
                    <p className="flex">Already have an account?<Link to="/signIn"><span className="text-[#75b2fe] flex">Sign In <MdArrowRight /></span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;