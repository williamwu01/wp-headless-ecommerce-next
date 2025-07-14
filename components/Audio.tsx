'use client';
import React, { useRef, useState, useEffect } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set initial volume to 20%
    }
  }, []);

  return (
    <div className="absolute bottom-4 right-4 z-50">
      {/* Audio element, initially muted */}
      <audio ref={audioRef} loop muted={isMuted}>
        <source src="/audio/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Play Button - only visible if audio is not playing */}
        <button
          onClick={handlePlay}
          className="bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
          aria-label="Play audio"
        >
          Play
        </button>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
        aria-label="Toggle audio mute"
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