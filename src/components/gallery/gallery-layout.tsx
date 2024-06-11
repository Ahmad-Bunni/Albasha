import React, { useEffect, useState } from "react";
import { GalleryItem } from "./gallery-item";
import { ListOfImages as images } from "./list-of-images";

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [fade, setFade] = useState<string>("fade-in");

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = images.indexOf(activeImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setFade("fade-out");
      setTimeout(() => {
        setActiveImage(images[nextIndex]);
        setFade("fade-in");
      }, 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImage, images]);

  return (
    <div className="flex py-4 flex-col items-center gap-3 md:gap-4">
      <img
        src={activeImage}
        alt="Selected"
        className={`object-fit max-md:h-[240px] max-md:w-[380px] h-[420px] w-[640px] rounded-xl shadow-lg transition-opacity duration-1000 ${
          fade === "fade-in" ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="md:text-lg font-semibold text-gray-500">
        {activeImage.split("/").pop()?.split(".")[0]}
      </div>

      <div className="no-scrollbar overflow-auto md:min-h-[200px] max-md:max-h-[calc(100vh-500px)] max-h-[calc(100vh-660px)] grid max-md:grid-cols-3 grid-cols-4 grid-rows-1 mx-auto">
        {images.map((src, index) => (
          <div key={index}>
            <GalleryItem
              src={src}
              onClick={() => {
                setActiveImage(src);
                setFade("fade-in");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
