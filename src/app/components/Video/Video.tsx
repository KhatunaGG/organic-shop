"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${ZERO_FORMATTER.format(minutes)}:${ZERO_FORMATTER.format(
      seconds
    )}`;
  }
  return `${minutes}:${ZERO_FORMATTER.format(seconds)}`;
}

type VideoPropsType = {
  title: string;
  videoURL: string;
  duration: number;
  view: number;
  img: string;
}[];

const VideoArr: VideoPropsType = [
  {
    title: "Farm Pioneering Organics in Croatia",
    // videoURL: "https://www.youtube-nocookie.com/embed/aRxymTETvXk?si=qr-jO_3x-lcYfgLp" ,
    videoURL:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: 360,
    view: 21,
    img: "/assets/video.png",
  },
];

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div className="w-full flex flex-col gap-2">
      {VideoArr.map((el, i) => (
        <div key={i}>
          <a
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
            href={el.videoURL}
            className="relative aspect-video w-full h-full"
          >
            <div className="relative w-full min-h-[200px]">
              <Image
                src={el.img}
                alt={""}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-1 right-1 px-.5 text-xs rounded text-white">
              {formatDuration(el.duration)}
            </div>

            <video
              ref={videoRef}
              muted
              playsInline
              src={el.videoURL}
              className={`block h-full object-cover absolute inset-0 rounded-lg transition-opacity duration-200 ${
                isVideoPlaying ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>

          <div className="flex flex-row items-start justify-between gap-2">
            <h2 className="w-[80%] text-md text-green-950 ">{el.title}</h2>
            <div className="w-[20%] text-sm text-right text-gray-400">
              {VIEW_FORMATTER.format(el.view)} views
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
