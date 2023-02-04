import './App.css';
import backgroundImage from '/images/background.webp';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex justify-center p-4">
        <div className=" text-center space-y-10">
          <img className="lg:max-w-2xl md:max-w-xl" src={backgroundImage} />

          <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl">
            Coming Soon
          </h1>

          <div className="lg:text-2xl md:text-xl text-xl">
            <a href="mailto:Albashanc@hotmail.com">
              <span className="m-2">Contact Us</span>

              <span className="underline text-red-700">Albasha</span>
            </a>
          </div>
        </div>
      </div>
      <footer className=" bg-basha text-white text-center">
        <div className="p-4">
          Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
