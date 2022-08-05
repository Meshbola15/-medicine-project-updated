import React from "react";
import { Link, NavLink } from "react-router-dom";
import Input from "../Input/Input";
import { useGlobalContext } from "../../context/context";

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <div className="w-full h-auto p-5 flex items-center justify-between bg-white shadow-lg fixed top-0">
      <Link to="/" className="text-xl md:text-3xl font-[consolas] uppercase font-light">
        Medicine
      </Link>

      <Input
        value={searchTerm}
        placeholder="Search something...."
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="space-x-4 navlink font-[poppins] capitalize text-base">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/edit">Edit</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
