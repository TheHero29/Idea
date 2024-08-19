// import { GetCurrentUser } from "../calls/users";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <>
      <nav className="flex justify-between items-center bg-primary fixed top-0 z-10 w-full">
        <Link to="/" className="p-3 pl-6 m-4 text-white">idea-dump</Link>

        <div
          className="p-3 pr-6 m-4 text-white lg:hidden hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`text-2xl transform transition-transform duration-300 ${
              show ? "rotate-90" : ""
            }`}
          >
            &#9776;
          </span>
        </div>

        <div className="gap-9 hidden lg:flex p-3 pr-6 m-4 text-white">
          {!user ? (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/signup" className="hover:underline">
                Signup
              </Link>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </>
          ) : (
            <>
              <Link to={`user/${user._id}`} className="hover:underline">
                Profile
              </Link>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </>
          )}
        </div>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-primary text-white transform ${
            show ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col items-center p-4 mt-9 space-y-6">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="hover:underline scale-[1.10]"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:underline scale-[1.10]"
                  onClick={toggleMenu}
                >
                  Signup
                </Link>
                <Link
                  to="/about"
                  className="hover:underline scale-[1.10]"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`user/${user._id}`}
                  className="hover:underline scale-[1.10]"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <Link
                  to="/about"
                  className="hover:underline scale-[1.10]"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
