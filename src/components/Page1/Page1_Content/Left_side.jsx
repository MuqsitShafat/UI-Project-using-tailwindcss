import React from "react";

const Left_side = () => {
  return (
    <div className="ml-10 h-full w-[45%] flex justify-center items-center">
      <div>
        <h1 className="text-7xl  font-anton text-black ">
          WELCOME TO <br></br><span className="text-red-600">ADAN</span> BAKERY
         </h1>
        <p className="text-2xl text-gray-500 mt-5 leading-[1.2] font-space-reg"> 
          We are a team of bakers who are passionate about creating delicious
          and beautiful desserts. Since 2010, we have been serving our customers
          with the best desserts in town. We are committed to using only the
          freshest ingredients and the highest quality products to create our
          desserts.
        </p>
      </div>
    </div>
  );
};

export default Left_side;
