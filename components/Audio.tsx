'use client';
//might need to add a stupid play button as the browser might block autoplay and it will not work
import React, { useRef, useState, useEffect } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set initial volume to 20%
    }
  }, []);

  return (
    <div className="absolute top-4 right-4 z-50">
			<audio ref={audioRef} autoPlay loop muted={isMuted}>
				<source src="/audio/audio.mp3" type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>

      <button
        onClick={toggleMute}
        className="bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
        aria-label="Toggle audio"
      >
        {isMuted ? (
          <SpeakerXMarkIcon className="h-6 w-6" />
        ) : (
          <SpeakerWaveIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}