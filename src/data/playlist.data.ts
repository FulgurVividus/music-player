import lana_del_rey_brooklyn_baby_cover from "../assets/imgs/lana_del_rey_brooklyn_baby.jpg";
import vance_joy_riptide_cover from "../assets/imgs/vance_joy_riptide.jpg";
import zubi_sugar_cover from "../assets/imgs/zubi_sugar.jpg";

import brooklyn_babe_song from "../assets/audio/Lana Del Rey - Brooklyn Baby.mp3";
import riptide_song from "../assets/audio/Riptide - Vance Joy.mp3";
import sugar_song from "../assets/audio/Zubi - Sugar (ft. Anatu).mp3";

export type MusicType = {
  id: number;
  artistName: string;
  songName: string;
  songCover: string;
  song: HTMLAudioElement;
};

export const playlist: MusicType[] = [
  {
    id: 1,
    artistName: "Lana Del Rey",
    songName: "Brooklyn Baby",
    songCover: lana_del_rey_brooklyn_baby_cover,
    song: new Audio(brooklyn_babe_song),
  },
  {
    id: 2,
    artistName: "Vance Joy",
    songName: "Riptide",
    songCover: vance_joy_riptide_cover,
    song: new Audio(riptide_song),
  },
  {
    id: 3,
    artistName: "Zubi",
    songName: "Sugar",
    songCover: zubi_sugar_cover,
    song: new Audio(sugar_song),
  },
];
