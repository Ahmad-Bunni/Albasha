import './App.css';
import Socials from './socials';
import backgroundImage from '/images/background.webp';

export default function App() {
  return (
    <div className="relative flex flex-col justify-between h-screen">
      <div className="flex flex-col space-y-4">
        <div className="md:max-w-3xl self-center mb-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-md shadow-md">
          <img
            alt="Chicken Shawarma at Al-Basha Market & Grill"
            className="w-full h-full object-cover"
            src={backgroundImage}
            loading="lazy"
          />
        </div>

        <div className="text-center text-zinc-700">
          <span className="font-bold block md:text-6xl text-5xl">
            Now Open!
          </span>
          <span className="font-bold block md:text-2xl text-lg mt-4">
            Online Ordering Available Soon
          </span>
        </div>

        <Socials />
      </div>

      <footer className="bg-red-700 text-white text-center p-4 lg:text-xl text-sm">
        Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
      </footer>
    </div>
  );
}
