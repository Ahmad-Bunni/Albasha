import { ReactNode, useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  logoOverlay?: ReactNode;
}

export default function VideoPlayer({
  videoSrc,
  logoOverlay,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Video autoplay failed:", err);
          setIsPlaying(false);
        }
      };
      playVideo();

      // Add event listeners
      videoRef.current.addEventListener("error", (e) => {
        console.error("Video error:", e);
      });
    }

    return () => {
      // Clean up event listeners
      if (videoRef.current) {
        videoRef.current.removeEventListener("error", () => {});
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      // Set volume to 50% when unmuting
      if (videoRef.current.muted) {
        videoRef.current.volume = 0.5;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onError={(e) => console.error("Video error:", e)}
        className="w-full h-full object-cover rounded-md"
        onClick={togglePlay}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Logo overlay positioned in top-left corner */}
      {logoOverlay && (
        <div className="absolute top-4 left-4 z-10">{logoOverlay}</div>
      )}

      {/* Mute/unmute button in top-right corner */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-red-800 hover:bg-red-700 rounded-full p-3 text-white shadow-lg"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <span className="text-xl">🔇</span>
        ) : (
          <span className="text-xl">🔊</span>
        )}
      </button>

      {/* Simple play/pause indicator (shown briefly when status changes) */}
      {isPlaying ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0">
          <span className="text-white text-4xl">▶</span>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0">
          <span className="text-white text-4xl">⏸</span>
        </div>
      )}
    </div>
  );
}
