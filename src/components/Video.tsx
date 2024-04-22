import { ComponentProps, useEffect, useRef, useState } from "react";

interface VideoProps extends Omit<ComponentProps<"video">, "ref" | "onPlay" | "onPause"> {
  isPlay?: boolean;
  onPlay?: (state: boolean) => void;
  onPause?: (state: boolean) => void;
}

export default function Video({ isPlay, onPause = () => { }, onPlay = () => { }, ...rest }: VideoProps) {
  const [playState, setPlayState] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handlePlay = () => {
      setPlayState(true);
      onPlay && onPlay(true);
    };

    const handlePause = () => {
      setPlayState(false);
      onPause && onPause(false);
    };

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, [onPause, onPlay]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    if (isPlay !== undefined) {
      if (isPlay && !playState) {
        videoElement.play().catch(() => {
          setPlayState(false);
          onPause && onPause(false);
        });
      } else if (!isPlay && playState) {
        videoElement.pause();
      }
    }
  }, [isPlay, playState, onPause]);

  return (
    <video
      ref={videoRef}
      {...rest}
    />
  );
}