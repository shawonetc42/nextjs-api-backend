import React from "react";

const data = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    title: "Only This Week",
    description: "Eat one every day",
    buttonText: "Order Now",
    item: " Quality eggs at an Eat one every day price",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    title: "Only This Week",
    description: "Eat one every day",
    buttonText: "Order Now",
    item: " Quality eggs at an Eat one every day price",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d48d2c256c0eb5f527289cadfbd81dd7bdf6968479bcdc2c2bc1ad599418d0e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    title: "Only This Week",
    description: "Eat one every day",
    buttonText: "Order Now",
    item: " Quality eggs at an Eat one every day price",
  },
];

function Banner2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-5 max-w-[1100px] mx-auto py-2">
      {data.map((item, index) => (
        <div className="flex overflow-hidden relative flex-col items-start py-9 pr-20 pl-5 text-xs font-bold tracking-tight max-w-[433px] min-h-[220px]">
          <img
            loading="lazy"
            srcSet={item.image}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative font-medium text-orange-600">
            {item.title}
          </div>
          <div className="relative mt-4 text-2xl tracking-tighter text-gray-900">
            Quality eggs at an
          </div>
          <div className="relative mt-1 text-2xl tracking-tighter text-gray-900">
            affordable price Eat one every day
          </div>

          <div className="flex relative gap-1.5 justify-center px-7 py-2.5 mt-5 text-center bg-white  border border-solid leading-[350%] rounded-[999px] text-neutral-800">
            <div>Shop Now</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7617b1dc840862ef77b29ee335526091f13b3d72b2a3174eab974bcd70b281f9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-5 aspect-[1.43]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner2;
