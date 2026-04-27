import {
  use,
  createContext,
  PropsWithChildren,
  useState,
  useRef,
  useEffect,
} from "react";
import type { Meditation } from "./types/meditationType";
import { createAudioPlayer, AudioPlayer } from "expo-audio";

const PlayerContext = createContext<{
  currentTrack: Meditation | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  repeatMode: "off" | "one";
  isShuffled: boolean;
  queue: Meditation[];
  playTrack: (track: Meditation) => void;
  pauseTrack: () => void;
  replayTrack: () => void;
  resumeTrack: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setQueue: (tracks: Meditation[]) => void;
  seekTo: (seconds: number) => void;
  clearTrack: () => void;
  toggleRepeat: () => void;
  shuffleQueue: () => void;
} | null>(null);

export function usePlayer() {
  const value = use(PlayerContext);
  if (!value) {
    throw new Error("usePlayer must be wrapped in a <PlayerProvider />");
  }
  return value;
}

export function PlayerProvider({ children }: PropsWithChildren) {
  const [currentTrack, setCurrentTrack] = useState<Meditation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState<Meditation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"off" | "one">("off");

  const playerRef = useRef<AudioPlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const originalQueueRef = useRef<Meditation[]>([]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (playerRef.current) {
        playerRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && isPlaying) {
      intervalRef.current = setInterval(() => {
        if (playerRef.current) {
          setCurrentTime(playerRef.current.currentTime);
          setDuration(playerRef.current.duration);

          if (
            playerRef.current.duration > 0 &&
            playerRef.current.currentTime >= playerRef.current.duration - 1
          ) {
            handleTrackEnd();
          }
        }
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentIndex]);

  const handleTrackEnd = () => {
    if (repeatMode === "one") {
      replayTrack();
    } else if (currentIndex < queue.length - 1) {
      playNext();
    } else {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const playTrack = (track: Meditation) => {
    try {
      if (playerRef.current) {
        playerRef.current.pause();
        playerRef.current.remove();
        playerRef.current = null;
      }
      playerRef.current = createAudioPlayer(track.audio);
      playerRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentTime(0);
    } catch (error) {
      console.error("Error playing track:", error);
    }
  };

  const pauseTrack = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resumeTrack = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const replayTrack = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.play();
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const playNext = () => {
    if (currentIndex < queue.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      playTrack(queue[nextIndex]);
    }
  };

  const playPrevious = () => {
    if (currentTime > 3) {
      replayTrack();
    } else if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      playTrack(queue[prevIndex]);
    }
  };

  const seekTo = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds);
    }
  };
  const clearTrack = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      playerRef.current.remove();
      playerRef.current = null;
    }
    setCurrentTrack(null);
    setIsPlaying(false);
  };

  const shuffleQueue = () => {
    if (isShuffled) {
      setQueue(originalQueueRef.current);
      setIsShuffled(false);
    } else {
      originalQueueRef.current = [...queue];
      const shuffled = [...queue];
      for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setQueue(shuffled);
      setIsShuffled(true);
    }
  };

  const toggleRepeat = () => {
    setRepeatMode((prev) => (prev === "off" ? "one" : "off"));
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        repeatMode,
        isShuffled,
        duration,
        queue,
        playTrack,
        pauseTrack,
        replayTrack,
        resumeTrack,
        playNext,
        playPrevious,
        setQueue,
        seekTo,
        clearTrack,
        toggleRepeat,
        shuffleQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
