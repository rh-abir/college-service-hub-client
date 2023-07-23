import { IoLogoGithub } from "react-icons/io";
import {AiFillGoogleCircle} from 'react-icons/ai'

const SocialLogin = () => {
  return (
    <div className="flex gap-3 justify-center items-center mt-2 -mb-5">
      <div className="bg-black w-10 h-10 text-white  rounded-full hover:bg-white  hover:text-black"> 
        <AiFillGoogleCircle className=" text-2xl  mx-auto mt-2 "></AiFillGoogleCircle>
      </div>

      <div className="bg-black w-10 h-10 text-white  rounded-full hover:bg-white  hover:text-black"> 
        <IoLogoGithub className=" text-2xl  mx-auto mt-2 "></IoLogoGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
