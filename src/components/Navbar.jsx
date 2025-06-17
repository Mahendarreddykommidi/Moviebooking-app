import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu,  Search, SearchIcon, X, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="px-6 md:px-16 lg:px-24 fixed top-0 left-0 z-50  w-full flex items-center justify-between py-10">
      <div className="max-md:flex-1">
        <NavLink to="/">
          <img src={assets.logo} alt="" className="w-36 h-auto" />
        </NavLink>
      </div>
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium 
    max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center 
    gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur
    bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden list-none transition-[width] duration-300 ${
      menuOpen ? "max-md:w-full" : "max-md:w-0"
    }`}
      >
        <XIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-6 h-6 absolute top-6 right-6 cursor-pointer"
        ></XIcon>

        <NavLink
          onClick={() => {
            scrollTo(0, 0), setMenuOpen(false);
          }}
          to="/"
        >
          {" "}
          <li>Home</li>
        </NavLink>
        <NavLink
          onClick={() => {
            scrollTo(0, 0), setMenuOpen(false);
          }}
          to="/movies"
        >
          {" "}
          <li>Movies</li>{" "}
        </NavLink>
        <NavLink
          onClick={() => {
            scrollTo(0, 0), setMenuOpen(false);
          }}
          to="/"
        >
          {" "}
          <li>Theatres</li>{" "}
        </NavLink>
        {user ? (
          <NavLink
            onClick={() => {
              scrollTo(0, 0);
              setMenuOpen(false);
            }}
            to="/admin"
          >
            <li className="text-primary-dull text-lg">Dashboard</li>
          </NavLink>
        ) : (
          <>
            <NavLink
              onClick={() => {
                scrollTo(0, 0);
                setMenuOpen(false);
              }}
              to="/"
            >
              <li>Releases</li>
            </NavLink>
            <NavLink
              onClick={() => {
                scrollTo(0, 0);
                setMenuOpen(false);
              }}
              to="/favourites"
            >
              <li>Favourites</li>
            </NavLink>
          </>
        )}
      </div>

      <div className="flex items-center gap-5">
        <SearchIcon color="white" className="w-6 h-6 hidden md:flex" />
        {!user ? (
          <button
            onClick={openSignIn}
            className="flex px-8 py-2 rounded-full bg-primary items-center gap-2"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="My bookings">
                
              
              </UserButton.Action>
            </UserButton.MenuItems>
          </UserButton>
        )}

        <Menu onClick={() => setMenuOpen(true)} className="md:hidden w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
