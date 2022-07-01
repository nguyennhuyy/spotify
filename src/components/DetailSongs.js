import React, { useContext } from 'react';
import { Songs } from '../ConText';

const DetailSongs = () => {
  const {song} = useContext(Songs)
  return (
    <div className='col-span-1 p-3'>
      <h2 className='text-cyan-500 font-bold'>Now playing</h2>
      <h2 className='text-gray-300 text-2xl'>{song.name}</h2>
      <div className='w-[170px] m-auto mt-1'> 
        <img className='w-full' src={song.links.images[0].url} alt='avatar' />
      </div>
      <div className='flex items-center mt-5 ml-[100px]'>
        <img className='w-[60px] h-[60px] mr-5  rounded-full object-cover  '
          src={song.links.images[1].url} alt='avatar' />
      <span className='text-teal-600 text-lg '>{song.author}</span>
      </div>
    </div>
  );
};

export default DetailSongs;