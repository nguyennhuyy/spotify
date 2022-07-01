import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../ConText';
const Playing = () => {
  const { song, handleSong } = useContext(Songs)
  const handleNext = () => {
    handleSong(song.id + 1)
  }
  const handlePrevious = () => {
    handleSong(song.id - 1)   
  }
  return (
    <div>    
      <AudioPlayer  src={song.url} className='player-music' layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={() => handleNext()}
        onClickPrevious={() => handlePrevious()}
      />
      
    </div>
  );
};

export default Playing;