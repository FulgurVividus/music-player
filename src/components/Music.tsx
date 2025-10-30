import type { MusicType } from "../data/playlist.data";
import { musicPlayerStore } from "../store/musicPlayer.store";
import { CiMusicNote1 } from "react-icons/ci";

type Props = {
  music: MusicType;
};

const Music = ({ music }: Props) => {
  return (
    <div
      className="
        flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
        hover:bg-white/10 transition-all duration-300 hover:shadow-lg
        border border-white/10 cursor-pointer"
    >
      <img
        src={music.songCover}
        alt={`${music.songName} cover`}
        className="
          w-16 h-16 rounded-xl object-cover
          shadow-md shadow-gray-500
        "
      />

      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm opacity-70 truncate">{music.artistName}</span>
        <span className="font-semibold truncate">{music.songName}</span>
      </div>

      {musicPlayerStore.isPlaying && (
        <span
          className="
            text-xs px-3 py-1 rounded-full bg-gray-500/30 text-gray-600
            animate-pulse font-medium
          "
        >
          <CiMusicNote1 size={20} />
        </span>
      )}
    </div>
  );
};

export default Music;
