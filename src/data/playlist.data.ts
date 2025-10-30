import lana_del_rey_brooklyn_baby_cover from "../assets/imgs/lana_del_rey_brooklyn_baby.jpg";
import vance_joy_riptide_cover from "../assets/imgs/vance_joy_riptide.jpg";
import zubi_sugar_cover from "../assets/imgs/zubi_sugar.jpg";

export type MusicType = {
  id: number;
  artistName: string;
  songName: string;
  songCover: string;
};

export const playlist: MusicType[] = [
  {
    id: 1,
    artistName: "Lana Del Rey",
    songName: "Brooklyn Baby",
    songCover: lana_del_rey_brooklyn_baby_cover,
  },
  {
    id: 2,
    artistName: "Vance Joy",
    songName: "Riptide",
    songCover: vance_joy_riptide_cover,
  },
  {
    id: 3,
    artistName: "Zubi",
    songName: "Sugar",
    songCover: zubi_sugar_cover,
  },
];
