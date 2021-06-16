import React, { useState } from "react";
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryState, setLibraryState] = useState(false);

  return (
    <div className="App">
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryState={libraryState}
      />
    </div>
  );
}

export default App;
