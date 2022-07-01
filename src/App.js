import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSongs from './components/DetailSongs';
import ListSongs from './components/ListSongs';
import { Songs } from './ConText';
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song)
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div className="App" >
      <Songs.Provider value={{DataSongs, song, handleSong}}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player 
        overflow-hidden'>
        {/* span 1 */}
        <DetailSongs />
        {/* span 2 */}
        <ListSongs/>
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
