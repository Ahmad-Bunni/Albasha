import "./App.css";
import Landing from "./components/landing";
import OrderIcons from "./components/order";
import Socials from "./components/socials/socials";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center border-b p-4 justify-between bg-gray-50 gap-6">
        <img
          src="images/Logo.jpg"
          className="md:w-[300px] w-[200px] rounded-md shadow-lg"
          alt="Logo"
          loading="lazy"
          decoding="async"
        />

        <OrderIcons />

        <Socials />
      </div>

      <Landing />

      <footer className="bg-red-800 text-white text-center p-2 text-sm md:lg:text-xl bottom-0 sticky  w-full ">
        Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
      </footer>
    </div>
  );
}
