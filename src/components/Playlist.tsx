import type { MusicType } from "../data/playlist.data";
import Music from "./Music";

type Props = {
  playlist: MusicType[];
};

const Playlist = ({ playlist }: Props) => {
  return (
    <>
      <ul className="flex flex-col gap-4">
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
