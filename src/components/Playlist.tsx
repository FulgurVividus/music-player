import type { MusicType } from "../data/playlist.data";
import { musicPlayerStore } from "../store/musicPlayer.store";
import Music from "./Music";

const Playlist = () => {
  const playlist = musicPlayerStore.playlist;

  return (
    <>
      <ul className="flex flex-col gap-2 p-2 h-100 overflow-y-auto [scrollbar-width:none]">
        {playlist.map((music: MusicType) => (
          <li key={music.id}>
            <Music music={music} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Playlist;
