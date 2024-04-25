import React from "react";

function Header() {
  return (
    <div className="bg-[#634C9F] ">
      <div className=" md:flex justify-between container mx-auto py-2 ">
        <h className="text-white px-2 text-sm">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </h>
        <h1 className="text-white px-2 text-sm">Until the end of the sale:</h1>
      </div>
    </div>
  );
}

export default Header;
