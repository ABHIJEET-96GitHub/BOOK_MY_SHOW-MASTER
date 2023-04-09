import React, { useState } from "react";
import {GoChevronRight} from "react-icons/go";
import {BiSearch, BiMenu, BiChevronDown} from "react-icons/bi";
import App from "../../App";

const NavSm = () => {
  return (
    <>
      {/* <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
             Idukki<GoChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div> */}
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      {/* <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      /> */}
    </div>
  );
};

var showLoginForm = false;
const handleChange=()=>{
  showLoginForm = !showLoginForm;
}
export const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          {showLoginForm ? <App handleChange={handleChange}></App> : <></>}
        </div>
        <span className="flex items-center w-1/2 gap-3">
          <span className="w-12 h-12">
            <img
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F3%2F952%2Fpng-transparent-logo-bookmyshow-business-brand-india-business-text-people-logo.png&tbnid=UQq1Lhbi1XQmsM&vet=12ahUKEwi5sNP205r-AhVETnwKHYZkANgQMygBegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dbookmyshow&docid=VDcKAiRF3yKkUM&w=920&h=344&q=bookmyshow%20logo%20png&ved=2ahUKEwi5sNP205r-AhVETnwKHYZkANgQMygBegUIARC8AQ"
              alt="logo"
              className="w-full h-full"
            />
          </span>
          <span className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md" style={{float:"left"}}>
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </span>
        </span>
        <span className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            Bengaluru <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded" style={{float:"right"}} onClick={handleChange}>
            Sign in
          </button>
          <span className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </span>
        </span>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab screen */}
          <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;