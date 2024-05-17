import FormInput from './FormInput';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='bg-white text-black justify-center items-center '>
      <div className='justify-center items-center w-[300px] h-[300px] border-black  '>
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
        </div>
      </div>
      <div>
        <p>New to Imdb?</p>
      </div>
      <div>
        <Link to="/signUp"><button className="border">Create your IMDb account</button></Link>
      </div>
    </div>
  )
}

export default SignIn;