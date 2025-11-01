import { makeAutoObservable } from "mobx";
import { playlist, type MusicType } from "../data/playlist.data";

class MusicPlayerStore {
  playlist: MusicType[] = playlist;
  currentSong: MusicType | null = null;
  isPlaying: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  play(song: MusicType): void {
    if (this.currentSong === song) {
      this.currentSong.song.play();
      this.isPlaying = true;
      return;
    }
    if (this.currentSong !== song && this.currentSong) {
      this.currentSong.song.pause();
      this.currentSong.song.currentTime = 0;
    }

    this.currentSong = song;
    this.currentSong.song.play();
    this.isPlaying = true;
  }

  pause(): void {
    if (this.currentSong) {
      this.currentSong.song.pause();
      this.isPlaying = false;
    }
  }

  playBack(): void {
    if (!this.currentSong) return;
    const index: number = this.playlist.indexOf(this.currentSong);

    if (index > 0) {
      const prevSong: MusicType = this.playlist[index - 1];
      this.play(prevSong);
    } else {
      const prevSong: MusicType = this.playlist[this.playlist.length - 1];
      this.play(prevSong);
    }
  }

  playForward(): void {
    if (!this.currentSong) return;
    const index: number = this.playlist.indexOf(this.currentSong);

    if (index < this.playlist.length - 1) {
      const nextSong: MusicType = this.playlist[index + 1];
      this.play(nextSong);
    } else {
      const nextSong: MusicType = this.playlist[0];
      this.play(nextSong);
    }
  }
}

export const musicPlayerStore = new MusicPlayerStore();
