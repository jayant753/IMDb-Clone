import { useState } from 'react';
import FormInput from './FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from '../../../utils/fireBase';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })
  const [user, setUsers] = useState([])
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserCredentials();
    
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }

  const getAllUsers = async () => {
    const q = query(collection(db, "user"))
    const users = onSnapshot(q, (querySnapshot) => {
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({...doc.data(), id : doc.id})
      })
      setUsers(userArray)
    })
  }

  const checkUserCredentials = () => {
    getAllUsers();
    for (let i=0 ; i<user.length; i++) {
      if (user[i].user.email !== formData.email || user[i].user.password !== formData.password) {
        toast.error( 'Invalid Credentials', {
        position : 'top-right',
          autoClose : 5000
         } )
      }
      else {
        toast.success( 'User logged in success', {
          position : 'top-right',
            autoClose : 5000
        } )
        localStorage.setItem("user", JSON.stringify(user[i]))
        navigate("/")
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 border">
      <div className="bg-white text-black justify-center items-center p-12 mb-25 w-[30%] border border-black-500">
        <div>
          <Link to="/">
            <button className='bg-[#f5c518] text-black font-bold p-1 text-[24px] rounded-md'>
              IMDb
            </button>
          </Link>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <FormInput
              labelText={"Email"}
              inputType={"text"}
              inputPlaceholder={""}
              required={true}
              value={formData.email}
              onChange={handleInputChange}
              name="email"
            />
            <div><a href="/forgot-password">Forgot your Password?</a></div>
            <FormInput
              labelText={"Password"}
              inputType={"password"}
              inputPlaceholder={""}
              required={true}
              value={formData.password}
              onChange={handleInputChange}
              name="password"
            />
            <div><button className='bg-[#f5c518] text-black p-1 rounded-md'>Sign In</button></div>
          </form>
          <div>
            <p>New to IMDb?</p>
            <Link to="/signUp">
              <button className="border" type='submit'>Create your IMDb account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
