import React from "react";
import CakeIconnav from "./CakeIconnav";
import SearchIconNav from "./SearchIconNav";
const Navbar = () => {
  return (
    <div className="px-15 py-14 h-20 w-full bg-white flex items-center justify-between ">
      <CakeIconnav />
      <SearchIconNav />
    </div>
  );
};

export default Navbar;
