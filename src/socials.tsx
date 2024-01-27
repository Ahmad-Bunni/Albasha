import AppleMap from './components/apple-map';
import CallUs from './components/call-us';
import Facebook from './components/facebook';
import GoogleMap from './components/google-map';
import Instagram from './components/instagram';

const Socials = () => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-center text-sm font-semibold">
          We'd love to hear from you!
        </span>

        <span className="text-center text-sm font-semibold">
          Connect with us and share your thoughts.
        </span>
      </div>
      <ul className="flex justify-center align-middle pb-4 space-x-5">
        <AppleMap />
        <GoogleMap />
        <Facebook />
        <Instagram />
        <CallUs />
      </ul>
    </>
  );
};

export default Socials;
