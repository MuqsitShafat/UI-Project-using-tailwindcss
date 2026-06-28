import React from 'react'
import { Search } from "lucide-react";
const SearchIconNav = () => {
  return (
    <div className="mr-5 flex items-center justify-around hover:text-red-500 cursor-pointer active:scale-90 transition-transform ">
        <Search size={30} className="mx-5" />
    </div>
  )
}

export default SearchIconNav