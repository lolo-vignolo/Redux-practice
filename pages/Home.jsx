import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSong } from '../actions';

const Home = () => {
  const store = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const listOfSongs = store.songs;
  const selectedSong = store.selectedSong;

  const handleSong = (song) => {
    dispatch(selectSong(song));
  };

  return (
    <div style={{ marginTop: '1rem', marginLeft: '2rem' }}>
      <div>
        <h3>List of songs</h3>
        <ul>
          {listOfSongs.map((song) => (
            <li key={song.id} className="right floated content">
              <h4>{song.title}</h4>
              <button
                onClick={() => handleSong(song)}
                className="btn btn-danger"
              >
                Choise Sonce
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h1> selected song: {selectedSong ? selectedSong.title : ''} </h1>
      <h2> Artis: {selectedSong ? selectedSong.artist : ''} </h2>
    </div>
  );
};

export default Home;
