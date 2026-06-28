import React from "react";

const NavContent = () => {
  return (
    <div className="mx-10 w-auto flex items-center justify-center gap-30 ">
      <h3 className="text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer hover:underline hover:text-red-500">Menu</h3>
      <h3 className="text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer hover:underline hover:text-red-500">Lunch Box</h3>
      <h3 className="text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer hover:underline hover:text-red-500">Platter</h3>
      <h3 className="text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer hover:underline hover:text-red-500">Specials</h3>
    </div>
  );
};

export default NavContent;
