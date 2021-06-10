import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, setSongs }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add active state
    setSongs(
      songs.map((song) => {
        if (song.id === id) {
          return { ...song, active: true };
        } else {
          return { ...song, active: false };
        }
      })
    );
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-drescription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
