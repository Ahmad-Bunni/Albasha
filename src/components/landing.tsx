import { useState } from "react";
import Gallery from "./gallery/gallery-layout";

const Landing = () => {
  const [homeComponent, setShowHomeComponent] = useState(true);

  const handleLeftClick = () => {
    setShowHomeComponent(true);
  };

  const handleRightClick = () => {
    setShowHomeComponent(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center shadow bg-gray-300 p-4 text-lg font-semibold">
        <button
          className={`w-[200px] p-2  rounded-l-md border-r ${homeComponent ? "bg-gray-800 text-white" : "bg-gray-50"}`}
          onClick={handleLeftClick}
        >
          Home
        </button>

        <button
          className={`w-[200px]  p-2 rounded-r-md ${!homeComponent ? "bg-gray-800 text-white" : "bg-gray-50"}`}
          onClick={handleRightClick}
        >
          Gallery
        </button>
      </div>

      <div className="flex justify-center">
        {homeComponent ? (
          <img
            src="images/store.webp"
            className="w-full"
            alt="Store"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Gallery />
        )}
      </div>
    </div>
  );
};

export default Landing;
