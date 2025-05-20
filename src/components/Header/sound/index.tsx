import SoundBar from './SoundBar';
import AudioPlayer from './AudioPlayer';

interface SoundToggleProps {
  isSoundOn: boolean;
  setIsSoundOn: (isOn: boolean) => void;
}

export default function SoundToggle({
  isSoundOn,
  setIsSoundOn,
}: SoundToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <div 
        id="sound-btn" 
        className="sound-toggle flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity"
        onClick={() => setIsSoundOn(!isSoundOn)}
      >
        <div 
          className="sound-toggle_text select-none opacity-0 transition-opacity text-xs"
          style={{ opacity: isSoundOn ? 0 : 0 }}
        >
          {isSoundOn ? 'mute' : 'play'}
        </div>
        <div className="sound-toggle_visualizer">
          <SoundBar isSoundOn={isSoundOn} />
        </div>
      </div>
      <AudioPlayer isSoundOn={isSoundOn} />
    </div>
  );
}
