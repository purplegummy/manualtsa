import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/nav.css";

export const Navbar = () => {
  const [dropDown, setDropDown] = React.useState(false);
  return (
    <div className="sticky top-0 transition-all text-slate-600 font-poppins flex flex-row h-28 w-full items-center justify-between px-20">
      <div className="">Logo</div>
      <div className="flex flex-row justify-between gap-16">
        <div className="text-lg items-center flex flex-row gap-16 flex-nowrap">
          <Link className="" to="/">
            Home
          </Link>
          <Link
            onMouseEnter={() => {
              setDropDown(true);
            }}
            onMouseLeave={() => {
              setDropDown(false);
            }}
            className="drop flex flex-nowrap items-center gap-2"
            to="/"
          >
            About{" "}
            <FontAwesomeIcon className="text-red-500" icon={faAngleDown} />
          </Link>
          {dropDown && (
            <div
              className="drop-down flex flex-col gap-2 absolute z-10 bg-white rounded-[15px] shadow-lg"
              onMouseEnter={() => {
                setDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
              }}
            >
              <h1 className="">About Us</h1>
              <h1>Officer</h1>
              {/* <h1>History</h1> */}
              <h1>Awards</h1>
            </div>
          )}
          <Link to="/">Events</Link>

          <Link to="/">Competitions</Link>
        </div>
        <Link
          className="contact rounded-[15px] block h-ful py-2 px-8 bg-[#F12D4C] border-solid border-red-200 border-4 text-white"
          to="/"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
