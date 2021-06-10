import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setSongs, libraryState }) => {
  return (
    <div className={`library ${libraryState ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
