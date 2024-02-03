import './App.css';
import Socials from './socials';
import backgroundImage from '/images/background.webp';
export default function App() {
  // Assuming `backgroundImage` is imported or defined elsewhere in your code.
  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <div className="flex flex-col space-y-8">
        <div className="self-center overflow-hidden rounded-md shadow-md max-w-full mx-auto">
          <img
            src={backgroundImage}
            alt="Chicken Shawarma at Al-Basha Market & Grill"
            className="w-full h-auto md:w-[720px] md:h-[480px] object-cover"
          />
        </div>

        <div className="text-center text-zinc-700 px-4">
          <span className="font-bold block text-3xl md:text-5xl ">
            Now Open!
          </span>
          <span className="font-bold block text-lg md:text-xl mt-2 md:mt-4">
            Online Ordering Available Soon
          </span>
        </div>

        <Socials />
      </div>

      <footer className="bg-red-700 text-white text-center p-4 text-sm md:lg:text-xl">
        Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
      </footer>
    </div>
  );
}
