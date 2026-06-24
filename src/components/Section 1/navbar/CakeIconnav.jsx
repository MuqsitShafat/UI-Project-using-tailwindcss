import { Cake } from "lucide-react";
import React from "react";
import NavContent from "./NavContent";

const CakeIconnav = () => {
  return (
    <div
      className="py-5 ml-10 w-auto flex items-center justify-start "
    >
      <Cake size={50} color = "red"/>
      <NavContent />
    </div>
  );
};

export default CakeIconnav;
