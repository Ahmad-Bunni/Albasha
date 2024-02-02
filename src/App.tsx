import './App.css';
import Socials from './socials';
import backgroundImage from '/images/background.webp';

export default function App() {
  return (
    <div className="flex flex-col just-ce absolute lg:mt-1 inset-0 justify-between">
      <div className="flex flex-col space-y-8">
        <img
          alt="Chicken Shawarma at Al-Basha Market & Gril"
          className="md:max-w-3xl rounded-md shadow-md self-center mb-8"
          width="100%"
          height="100%"
          src={backgroundImage}
        />

        <span className="text-center text-zinc-700 font-bold md:text-6xl text-5xl">
          Now Open!
        </span>

        <span className="text-center text-zinc-700 font-bold md:text-2xl text-lg">
          Online Ordering Available Soon
        </span>

        <Socials />
      </div>

      <footer className=" bg-red-700 text-white text-center">
        <div className="p-4 lg:text-xl text-sm">
          Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
