import FormInput from './FormInput';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 border">
    <div className="bg-white text-black justify-center items-center p-12 mb-25 w-[30%] border border-black-500  ">
        <div className=''>
          <Link to="/"><button className='bg-[#f5c518] text-black font-bold p-1 text-[24px] rounded-md'>
            IMDb
          </button></Link>
        </div>
        <div>
          <form>
            <FormInput labelText={"Email or Phone Number"} inputType={"Text"} inputPlaceholder={""} required={true} />
            <div><a>Forgot your Password?</a></div>
            <FormInput labelText={"Password"} inputType={"password"} inputPlaceholder={""} required={true} />
            <div><button className='bg-[#f5c518] text-black p-1 rounded-md'>Sign In</button></div>
          </form>
          <div>
        <p>New to Imdb?</p>
        <Link to="/signUp"><button className="border">Create your IMDb account</button></Link>
      </div>
        </div>
      </div>
     
    </div>
  )
}

export default SignIn;
