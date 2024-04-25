import React from "react";

const bannerData = [
  {
    title: "Payment only online",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/73fd640b602a571c135b25ef4dc87e63b4266134926926ea7218662c6dfc1a82?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "New stocks and sales",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5e395bc8a14c17f2e9752df2817029075306a2e48735eaf966ad2249a7ca5dba?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "Quality assurance",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ec31f80c1e45655260254c89632bff89c3d1266e5768a28f5bf4e6df656f61d7?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "Delivery from 1 hour",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e478d2bb34eb5257bbd000cd12e599553c3d77324e78ce38181a3dfffde9afb7?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
];
function Banner() {
  return (
    <div className="flex flex-col tracking-tight border-b py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-5 max-w-[1100px] mx-auto">
        {bannerData.map((item, index) => (
          <div key={index} className="flex flex-1 gap-5 items-start">
            <img
              loading="lazy"
              src={item.image}
              className="shrink-0 self-end mt-7 w-14 aspect-[0.98]"
            />
            <div className="flex flex-col self-start">
              <div className="text-base font-bold text-gray-950">
                {item.title}
              </div>
              <div className="mt-2.5 text-sm leading-5 text-gray-500">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
