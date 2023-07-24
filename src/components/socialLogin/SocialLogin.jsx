import { IoLogoGithub } from "react-icons/io";
import {AiFillGoogleCircle} from 'react-icons/ai'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import { toast } from "react-toastify";

const SocialLogin = () => {

    const {googleLogin, gitHubLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(erro => {
            console.log(erro.message)
        })
    }

  return (
    <div className="flex gap-3 justify-center items-center mt-2 -mb-5">
      <div onClick={handleGoogleLogin} className="bg-black w-10 h-10 text-white  rounded-full hover:bg-white  hover:text-black"> 
        <AiFillGoogleCircle className=" text-2xl  mx-auto mt-2 "></AiFillGoogleCircle>
      </div>

      <div className="bg-black w-10 h-10 text-white  rounded-full hover:bg-white  hover:text-black"> 
        <IoLogoGithub className=" text-2xl  mx-auto mt-2 "></IoLogoGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
