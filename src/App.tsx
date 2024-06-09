import { useState } from "react";
import "./App.css";
import Gallery from "./components/gallery/gallery-layout";
import { X, Menu } from "lucide-react";
import StoreIcons from "./components/apps/store";
import Socials from "./components/socials/socials";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="relative flex flex-col h-full">
        <div className="flex flex-col justify-between">
          <div className="flex md:flex-col items-center border-b p-4 justify-between">
            <img
              src={"images/Logo.jpg"}
              className="w-[200px] max-lg:w-[80px]"
              alt="Logo"
            />

            <span className="font-bold block text-lg text-gray-600 p-2 h-full px-2">
              Al-Basha Market & Grill
            </span>

            <div className="md:hidden flex justify-between items-center p-4">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            <ul
              className={`justify-center items-center ${
                isOpen ? "block" : "hidden"
              } md:block`}
            >
              <li className="p-4">
                <StoreIcons />
              </li>

              <li className="p-4">
                <Socials />
              </li>
            </ul>
          </div>
        </div>

        <Gallery />
      </div>

      <footer className="bg-red-700 text-white text-center p-2 text-sm md:lg:text-xl bottom-0 sticky w-full">
        Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
      </footer>
    </div>
  );
}
