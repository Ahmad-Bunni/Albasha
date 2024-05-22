import AppleMap from './apple-map';
import CallUs from './call-us';
import Facebook from './facebook';
import GoogleMap from './google-map';
import Instagram from './instagram';

const Socials = () => {
  return (
    <ul className="flex justify-center items-center space-x-4 max-md:border-b px-2 p-2">
      <AppleMap />

      <GoogleMap />

      <Facebook />

      <Instagram />

      <CallUs />
    </ul>
  );
};

export default Socials;
