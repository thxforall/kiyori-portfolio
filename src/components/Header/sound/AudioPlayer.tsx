import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  isSoundOn: boolean;
}

export default function AudioPlayer({ isSoundOn }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isSoundOn) {
      audioRef.current.volume = 0.1;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
  }, [isSoundOn]);

  return (
    <audio
      ref={audioRef}
      id="bg-audio"
      loop
      preload="false"
      src="/music/destination - Lish Grooves.mp3"
    />
  );
} 