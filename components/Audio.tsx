import React, { useState } from 'react';
//this is busted we need a audio player
export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src="/path-to-your-audio-file.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}