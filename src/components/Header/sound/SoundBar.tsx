interface SoundBarProps {
  isSoundOn: boolean;
}

export default function SoundBar({ isSoundOn }: SoundBarProps) {
  const bars = Array.from({ length: 4 }, (_, i) => i);

  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex items-end"
      >
        {bars.map((i) => (
          <rect
            key={i}
            x={5 + i * 4}
            y={8}
            width="2"
            height="12"
            fill="currentColor"
            className={`${isSoundOn ? 'animate-sound-bar' : ''} ${isSoundOn ? '' : 'opacity-50'}`}
            style={{
              animationDelay: `${i * 0.15}s`,
              transformOrigin: 'bottom',
            }}
          />
        ))}
      </svg>
      <style jsx>{`
        @keyframes sound-bar {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.3);
          }
        }
        .animate-sound-bar {
          animation: sound-bar 1s ease-in-out infinite;
        }
      `}</style>
    </>
  );
} 