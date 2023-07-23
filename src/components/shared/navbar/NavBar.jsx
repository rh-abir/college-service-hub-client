import { Link, NavLink } from "react-router-dom";

const NavBar = () => {


  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);


  const navLink = (
    <>
      <li>
        <NavLink to="/" className={Hover}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/Colleges" className={Hover}>Colleges</NavLink>
      </li>
      <li>
        <NavLink to="/admissionColleges" className={Hover}>Admission</NavLink>
      </li>
      <li>
        <NavLink to="/my-colleges" className={Hover}>My College</NavLink>
      </li>
    </>
  );

  const isShow = false;

  return (
    <div className="navbar bg-slate-500 mb-4 container rounded-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {!isShow ? (
          <Link to="/signin" className="btn">
            Log In
          </Link>
        ) : (
          <div className="">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink>Profile</NavLink>
                </li>
                <li>
                  <NavLink>Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
