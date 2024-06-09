import React from "react";
import { Apple, Play } from "lucide-react";

const StoreIcons = () => {
  return (
    <div className="flex space-x-4 justify-center max-md:text-sm">
      <a
        href="https://play.google.com/store/apps/details?id=io.applova.clermont.pkgXA2CJK9088G11"
        target="_blank"
        className="text-white bg-green-600 p-2 hover:bg-green-700 text-center md:h-[40px] h-[35px] w-[200px] rounded-md flex gap-2"
      >
        <Play className="w-4 h-4 md:w-6 md:h-6" />
        <span>Google Play</span>
      </a>
      <a
        href="https://apps.apple.com/us/app/al-basha-raleigh-nc/id6475901077"
        target="_blank"
        className="text-white bg-gray-900 p-2 hover:bg-gray-800 text-center md:h-[40px] h-[35px] w-[200px] rounded-md flex gap-2"
      >
        <Apple className="w-4 h-4 md:w-6 md:h-6" />
        <span>App Store</span>
      </a>
      <a
        href="https://albashanc.applova.menu"
        target="_blank"
        className="text-white bg-red-600 p-2 hover:bg-red-500 text-center md:h-[40px] h-[35px] w-[200px] rounded-md"
      >
        Order Online
      </a>
    </div>
  );
};

export default StoreIcons;
