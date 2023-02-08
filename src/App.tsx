import './App.css';
import backgroundImage from '/images/background.webp';

function App() {
  return (
    <div className="flex flex-col absolute inset-0 justify-between">
      <div className="flex justify-center">
        <div className=" text-center space-y-10">
          <img
            className="lg:max-w-2xl md:max-w-xl max-w-xs"
            src={backgroundImage}
          />

          <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl">
            Coming Soon
          </h1>

          <div className="flex flex-col items-center lg:text-2xl md:text-xl text-xl space-y-6">
            <a
              className="flex space-x-2 hover:underline"
              href="mailto:info@albashanc.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 relative top-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <span className=" text-red-700">info@albashanc.com</span>
            </a>

            <a
              className="flex space-x-2 hover:underline"
              href="http://maps.google.com/maps?q=501+Method+Rd+Raleigh%2C+NC+27607+United+States"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 relative top-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span className=" text-red-700">
                501 Method Rd Raleigh NC 27607 United States
              </span>
            </a>
          </div>
        </div>
      </div>
      <footer className=" bg-basha text-white text-center">
        <div className="p-4 lg:text-xl text-sm">
          Copyright © {new Date().getFullYear()} Albasha - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
