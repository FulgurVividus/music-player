import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
  trackName: string = "";
  isPlaying: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export const musicPlayerStore = new MusicPlayerStore();
