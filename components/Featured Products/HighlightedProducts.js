import React from "react";

const HProducts = [
  {
    title: "Cupcakes",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "Cupcakes",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
];
function HighlightedProducts() {
  return (
    <div className="flex container mx-auto py-2">
      {HProducts.map((product) => (
        <div className="flex flex-col px-5 max-w-[197px] border rounded-lg ">
          <img
            loading="lazy"
            srcSet={product.image}
            className="w-full aspect-square"
          />
          <div className="mt-3.5 w-full text-sm font-medium tracking-tight leading-5 text-gray-950">
            {product.title}
          </div>
          <div className="flex gap-2 mt-3.5 text-xs tracking-tight leading-3 text-gray-500 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff21040fad356c4abe1abb761fb09ebda54c43feb970a3b268e4eb263b3ef935?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 aspect-[6.25] w-[67px]"
            />
            <div className="flex-auto">3</div>
          </div>
          <div className="flex gap-2 mt-5 tracking-tight whitespace-nowrap">
            <div className="text-2xl font-bold leading-6 text-red-600">
              {product.price}
            </div>
            <div className="flex-auto text-base font-medium leading-4 text-gray-900">
              {product.currentprice}
            </div>
          </div>
          <div className="flex gap-5 justify-end px-3 py-2.5 mt-3.5 w-full text-sm font-medium tracking-tight leading-10 text-purple-800 border border-purple-800 border-solid rounded-[999px]">
            <div className="my-auto">Add to cart</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1d28964479e3036aed9be907ed98282f39fa63fe47a6ceef015576e8e5fcde?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 aspect-[1.56] w-[25px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HighlightedProducts;
