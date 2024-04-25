import React from "react";

function MainHeader() {
  return (
    <div className="flex gap-5 justify-between items-center shadow-sm px-8 py-3.5 bg-white max-md:flex-wrap max-md:px-5 container mx-auto">
      <img
        loading="lazy"
        srcSet="/logo.png"
        className=" rounded-full w-[100px]"
      />
      {/* 2 */}
      <div className=" hidden md:flex gap-3.5 self-stretch my-auto text-sm font-semibold leading-5 capitalize text-slate-900 max-md:flex-wrap ">
        <div className="grow my-auto">Account</div>
        <div className="my-auto">All Courses</div>
        <div className="flex gap-1 whitespace-nowrap">
          <div className="grow my-auto">Resource</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43028b5a537d89751388e6195f9b39c4d4bb763e35304eb4a71cd86d28824d81?"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-1 whitespace-nowrap">
          <div className="grow my-auto">Contact</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbced6464a20f6771fda015d2e102756169f7cf0e4d40dfad4a0bcec292de6b4?"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-1 whitespace-nowrap">
          <div className="grow my-auto">Affiliate</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/290f950789dfd9af471f98a6d930cd34a8594584fb9a6a651bc59c775928685f?"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8837cbd95551f8e7fcf56e305fd05bcb1df7be26c7af490ba588e495aadfc3?"
          className="shrink-0 self-stretch my-auto aspect-square w-[15px]"
        />
        <div className="self-stretch my-auto text-xs font-semibold leading-4 uppercase text-slate-900">
          0.0 $
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50c95bf56d77bf1eaac8d4191b762ee6dd3480259bdeda55ab12f72a7c81b4c?"
          className="shrink-0 self-stretch my-auto aspect-square w-[15px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8862f37897affef56ebdd7a786f9074601dc5b0335c5795822f41d26c0c821?"
          className="shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="justify-center self-stretch px-4 py-3 text-sm font-medium leading-4 text-center text-white whitespace-nowrap bg-indigo-600 rounded">
          Register
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
