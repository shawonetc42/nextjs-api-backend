import React from "react";

function Navigation() {
  return (
    <div className="border-b hidden md:block">
      <div className="flex justify-between container mx-auto ">
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <h1>about</h1>
            <h1>about</h1>
            <h1>about</h1>
          </div>

          <div className="flex">
            <h1 className="text-red-700">
              We deliver to you every day from 7:00 to 23:00
            </h1>
          </div>
        </div>

        <div className="flex gap-2">
          <h1>English</h1>
          <h1>English</h1>
          <h1>English</h1>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
