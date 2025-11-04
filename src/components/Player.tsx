import { useEffect, useRef, useState } from "react";
import { musicPlayerStore } from "../store/musicPlayer.store";
import { FaStepBackward, FaStepForward, FaPlay, FaPause } from "react-icons/fa";
import { formatSecondsToMinutes } from "../utils/utils";
import type { MusicType } from "../data/playlist.data";

const Player = () => {
  const currentSong: MusicType | null = musicPlayerStore.currentSong;
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const progressBar = useRef<HTMLInputElement>(null);

  //# effect for currentTime, duration, auto-play next song
  useEffect(
    function () {
      if (!currentSong || !progressBar.current) return;
      const audio: HTMLAudioElement = currentSong.song;

      const updateTime = (): void => {
        setCurrentTime(audio.currentTime);
        if (progressBar.current) {
          progressBar.current.value = String(audio.currentTime);
        }
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.current?.style.setProperty("--value", `${percent}%`);
      };

      const autoPlayNextSong = (): void => {
        musicPlayerStore.playForward();
      };

      setDuration(audio.duration);
      progressBar.current.max = String(audio.duration);
      progressBar.current.min = "0";

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("ended", autoPlayNextSong);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("ended", autoPlayNextSong);
      };
    },
    [currentSong]
  );

  function changeRange(): void {
    if (!currentSong || !progressBar.current) return;
    if (progressBar.current) {
      const percent: number =
        (Number(progressBar.current.value) / duration) * 100;
      progressBar.current.style.setProperty("--value", `${percent}%`);
    }

    setCurrentTime(Number(progressBar.current.value));
    currentSong.song.currentTime = Number(progressBar.current.value);
  }

  return (
    <>
      {currentSong !== null ? (
        <div className="w-full space-y-1 p-4 rounded-2xl bg-linear-to-r from-gray-800/60 to-black/60">
          {/* controls */}
          <div className="flex items-center justify-center gap-2">
            <button type="button" title="Back">
              <FaStepBackward
                onClick={() => musicPlayerStore.playBack()}
                size={20}
                className="text-white"
              />
            </button>
            <button
              type="button"
              title={`${musicPlayerStore.isPlaying ? "Pause" : "Play"}`}
            >
              {musicPlayerStore.isPlaying ? (
                <FaPause
                  onClick={() => musicPlayerStore.pause()}
                  size={20}
                  className="text-white"
                />
              ) : (
                <FaPlay
                  onClick={() => musicPlayerStore.play(currentSong)}
                  size={20}
                  className="text-white"
                />
              )}
            </button>
            <button type="button" title="Forward">
              <FaStepForward
                onClick={() => musicPlayerStore.playForward()}
                size={20}
                className="text-white"
              />
            </button>
          </div>

          <div className="grid grid-cols-[60px_1fr_60px] items-center">
            {/* current time */}
            <p className="text-white text-start font-semibold">
              {formatSecondsToMinutes(currentTime)}
            </p>

            {/* progress bar */}
            <div>
              <input
                type="range"
                value={currentTime}
                step={0.001}
                ref={progressBar}
                onChange={changeRange}
                className="slider"
                style={{}}
              />
            </div>

            {/* duration time */}
            <p className="text-white text-end font-semibold">
              {formatSecondsToMinutes(duration)}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Player;
