import AppleMap from "./apple-map";
import CallUs from "./call-us";
import Facebook from "./facebook";
import GoogleMap from "./google-map";
import Instagram from "./instagram";

const Socials = () => {
  return (
    <ul className="flex justify-center items-center space-x-4">
      <AppleMap />

      <GoogleMap />

      <Facebook />

      <Instagram />

      <CallUs />
    </ul>
  );
};

export default Socials;
