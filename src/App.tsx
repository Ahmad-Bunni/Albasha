import "./App.css";
import Landing from "./components/landing";
import OrderIcons from "./components/order";
import Socials from "./components/socials/socials";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900">
      <div className=" flex flex-col items-center border-b justify-between gap-2 relative overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] xl:h-[650px]">
          <VideoPlayer
            videoSrc="/video.mp4"
            logoOverlay={
              <img
                src="images/Logo.jpg"
                className="lg:w-[180px] w-[100px] rounded-md shadow-lg opacity-90"
                alt="Logo"
                loading="lazy"
                decoding="async"
              />
            }
          />
        </div>

        <div className="relative flex flex-col items-center gap-6 w-full m-6">
          <OrderIcons />

          <Socials />
        </div>
      </div>

      <Landing />

      <footer className="bg-red-800 text-white text-center p-2 text-sm md:lg:text-xl bottom-0 sticky w-full z-10">
        Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
      </footer>
    </div>
  );
}
