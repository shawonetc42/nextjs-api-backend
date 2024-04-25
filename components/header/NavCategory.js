import React from "react";

function NavCategory() {
  return (
    <div className="hidden md:flex justify-center items-center  tracking-tight bg-white max-md:px-5 border-b ">
      <div className="flex gap-5 justify-between w-full container mx-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between text-base font-semibold leading-10 text-gray-950 max-md:flex-wrap">
          <div className="flex flex-col justify-center bg-white rounded-lg">
            <div className="flex gap-5 justify-between items-start px-5 py-px w-full rounded-lg border border-t border-r border-l border-solid">
              <div className="flex gap-3.5 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?"
                  className="shrink-0 aspect-[1.22] w-[22px]"
                />
                <div>All Categories</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02faea6c017b1504331b25c4a25712e12d6b1bda78afe0b01f77c0f248568d72?"
                className="shrink-0 self-start w-2.5 aspect-[0.21]"
              />
            </div>
          </div>
          <div className="flex flex-col self-start whitespace-nowrap">
            <div className="flex z-10 gap-2">
              <div className="my-auto">Home</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b7a5ac3c1cbdf8bcb4a1077891019695c8e41ee0ff22870b4b00cbbee7141?"
                className="shrink-0 w-2.5 aspect-[0.21]"
              />
            </div>
          </div>
          <div className="flex gap-2.5 self-start whitespace-nowrap">
            <div className="my-auto">Shop</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ba23c7bf05921254e026dbea8ff9087804850ea3b9185c1912eeb25ed200be?"
              className="shrink-0 aspect-[0.19] w-[9px]"
            />
          </div>
          <div className="flex gap-5 my-auto">
            <div className="grow">Fruits & Vegetables</div>
            <div>Beverages</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-start">
          <div className="flex gap-3 text-base font-semibold leading-10 text-gray-950">
            <div className="grow my-auto">Trending Products</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f153f27fb2fdc5617357987f4c15d5abcb4ebc901df4e7ab176bc4698c356908?"
              className="shrink-0 w-2.5 aspect-[0.21]"
            />
          </div>
          <div className="flex gap-2.5 items-center">
            <div className="grow self-stretch my-auto text-base font-semibold leading-10 text-red-600">
              Almost Finished
            </div>
            <div className="justify-center self-stretch px-2 py-1.5 my-auto text-xs font-bold leading-3 text-center text-white whitespace-nowrap rounded">
              SALE
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61d19d59ead7a9eedd46b42023bcbd06b762891b71bcf67bb8ef476eef75e3c?"
              className="shrink-0 self-stretch w-2.5 aspect-[0.21]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCategory;
