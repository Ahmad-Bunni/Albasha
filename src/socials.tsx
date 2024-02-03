import AppleMap from './components/apple-map';
import CallUs from './components/call-us';
import Facebook from './components/facebook';
import GoogleMap from './components/google-map';
import Instagram from './components/instagram';

const Socials = () => {
  return (
    <ul className="flex justify-center items-center pb-4 space-x-4">
      <AppleMap />

      <GoogleMap />

      <Facebook />

      <Instagram />

      <CallUs />
    </ul>
  );
};

export default Socials;
