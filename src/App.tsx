import Player from "./components/Player";
import Playlist from "./components/Playlist";

const App = () => {
  return (
    <main className="max-w-4xl w-full mx-auto py-4 min-h-screen relative">
      <div className="mb-10 text-center">
        <h1
          className="text-3xl font-extrabold mb-1 tracking-tight
            bg-linear-to-r from-white to-black/60 text-transparent bg-clip-text
            drop-shadow-md"
        >
          Music Player
        </h1>
        <p className="text-sm opacity-60">
          <span>Your music, your vibe...</span>
        </p>
      </div>

      <Playlist />

      <div className="absolute bottom-4 left-0 px-4 w-full">
        <Player />
      </div>
    </main>
  );
};

export default App;
