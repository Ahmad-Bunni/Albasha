import './App.css';
import Socials from './socials';
import backgroundImage from '/images/background.webp';
export default function App() {
  // Assuming `backgroundImage` is imported or defined elsewhere in your code.
  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <div className="flex flex-col space-y-8">
        <div className="self-center rounded-md shadow-md">
          <img
            src={backgroundImage}
            alt="Chicken Shawarma at Al-Basha Market & Grill"
            className="object-cover"
            height="480px"
            width="720px"
          />
        </div>

        <div className="text-center text-zinc-700 px-4">
          <span className="font-bold block text-3xl">Now Open!</span>
          <span className="font-bold block text-lg mt-2">
            Online Ordering Available Soon
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-center text-sm font-semibold">
            We'd love to hear from you!
          </span>

          <span className="text-center text-sm font-semibold">
            Connect with us and share your thoughts.
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
