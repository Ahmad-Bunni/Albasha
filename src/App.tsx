import './App.css';
import Socials from './socials';
import backgroundImage from '/images/background.webp';

export default function App() {
  return (
    <div className="flex flex-col just-ce absolute lg:mt-1 inset-0 justify-between">
      <div className="flex flex-col space-y-8">
        <img
          className="lg:max-w-3xl md:max-w-2xl rounded-md shadow-md self-center mb-8"
          src={backgroundImage}
        />

        <span className="text-center text-zinc-700 font-bold lg:text-6xl md:text-5xl text-5xl">
          Now Open!
        </span>

        <span className="text-center text-zinc-700 font-bold lg:text-2xl md:text-xl text-lg">
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
