import { Link } from "react-router-dom";
import SocialLogin from "../../../components/socialLogin/SocialLogin";
import { MdOutlineLockPerson } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";

const Signin = () => {
  const { user, singIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;


    singIn(email, password)
    .then(resutl => {
      console.log(resutl.user)
    })
    .cathc(err => {
      console.log(err.message)
    })

    

    const formData = {
      email,
      password,
    };

    console.log(formData);
  };





  
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <div className="bg-white w-10 h-10 rounded-full">
                <MdOutlineLockPerson className="text-2xl  mx-auto mt-2"></MdOutlineLockPerson>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6">
              <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                sign In
              </a>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>

              <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                or sign in with
              </p>

              {<SocialLogin />}

              <div className="mt-6 text-center ">
                <Link
                  to="/signup"
                  href="#"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Don’t have an account yet? Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signin;
