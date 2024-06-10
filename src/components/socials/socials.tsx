import { AppStore } from "./app-store";
import AppleMap from "./apple-map";
import CallUs from "./call-us";
import Facebook from "./facebook";
import GoogleMap from "./google-map";
import { GooglePlay } from "./google-play";
import Instagram from "./instagram";

const Socials = () => {
  return (
    <ul className="flex justify-between md:w-[400px] w-[350px]">
      <AppleMap />

      <GoogleMap />

      <Facebook />

      <Instagram />

      <CallUs />

      <AppStore />

      <GooglePlay />
    </ul>
  );
};

export default Socials;
