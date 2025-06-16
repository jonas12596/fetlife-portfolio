import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export type Message =
  | { sender: string; type: 'text'; content: string }
  | { sender: string; type: 'voice'; content: Blob }
  | { sender: string; type: 'image'; content: string };

interface ChatProps {
  messages: Message[];
  vanishMode: boolean;
}

export default function ChatMessages({ messages, vanishMode }: ChatProps) {
  return (
    <div className={`p-4 space-y-4 transition-colors duration-500 ${vanishMode ? 'bg-[#504848]' : 'bg-[#1e1e1e]'}`}>
      {messages.map((msg, index) => (
        <MessageBubble key={index} msg={msg} vanishMode={vanishMode} />
      ))}
    </div>
  );
}

function MessageBubble({ msg, vanishMode }: { msg: Message; vanishMode: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (msg.type === "voice") {
      const objectUrl = URL.createObjectURL(msg.content);
      const audio = new Audio(objectUrl);
      audioRef.current = audio;

      const handleCanPlayThrough = () => setDuration(audio.duration);
      const handleTimeUpdate = () => setProgress(audio.currentTime);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener("canplaythrough", handleCanPlayThrough);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.pause();
        audio.removeEventListener("canplaythrough", handleCanPlayThrough);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [msg]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number | null) => {
    if (time === null || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progressPercent = duration ? (progress / duration) * 100 : 0;

  return (
    <div className={`flex flex-col ${msg.sender === "userB" ? "items-end" : "items-start"}`}>
      <div className="text-sm px-2 text-gray-400 mb-1">
        {msg.sender === "userB" ? "You" : "Goddess Tiffany"}
      </div>
      <div
        className={`flex items-start ${
          msg.sender === "userB" ? "justify-end" : "justify-start"
        }`}
      >
        {msg.sender === "userB" ? null : <div className="w-10 h-10 rounded-full bg-gray-400 mr-2" />}
        <div
          className={`px-4 py-2 text-white rounded-xs transition-colors duration-500 ${
            msg.sender === "userB"
              ? vanishMode
                ? "bg-[#772727] border-[.5px] border-red-500"
                : "bg-[#555]"
              : vanishMode
              ? "bg-[#3d1e1e] border-[.5px] border-red-500"
              : "bg-[#333]"
          }`}
        >
          {msg.type === "voice" ? (
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlayback}
                className="p-2 rounded-full cursor-pointer bg-[#b0090c] hover:bg-[#c0090c] text-white"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <div className="w-40 h-1 bg-[#444] border-[.2px] border-white/25 rounded overflow-hidden">
                <div className="h-full bg-[#b0090c]" style={{ width: `${progressPercent}%` }} />
              </div>
              <div className="text-xs text-white">
                {formatTime(isPlaying || progress > 0 ? progress : 0)} / {formatTime(duration)}
              </div>
            </div>
          ) : msg.type === "image" ? (
            <img
              src={msg.content}
              alt="Sent image"
              className="max-w-xs max-h-60 rounded cursor-pointer"
              onLoad={() => {
              }}
            />
          ) : (
            <span>{msg.content}</span>
          )}
        </div>
        {msg.sender === "userB" ? <div className="w-10 h-10 rounded-full bg-gray-400 ml-2" /> : null}
      </div>
    </div>
  );
}