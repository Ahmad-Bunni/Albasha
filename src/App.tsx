import './App.css';
import Gallery from './components/gallery/gallery-layout';
import Socials from './components/socials/socials';
export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="relative flex flex-col h-full">
        <div className="flex max-md:flex-col justify-between">
          <div className="text-center text-zinc-700">
            <span className="font-bold block text-lg text-gray-600 max-md:border-b max-md:p-2 h-full content-center px-2">
              Al-Basha Market & Grill
            </span>
          </div>

          <Socials />
        </div>

        <a
          href="https://albashanc.applova.menu"
          target="_blank"
          className="text-white bg-red-600 p-2 hover:bg-red-500 text-center h-[40px]"
        >
          Our Menu
        </a>

        <Gallery />
      </div>

      <footer className="bg-red-700 text-white text-center p-2 text-sm md:lg:text-xl bottom-0 sticky w-full">
        Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
      </footer>
    </div>
  );
}
