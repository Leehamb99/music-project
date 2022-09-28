import React from 'react';
import { SongList } from '../../components';
import { SongCard } from '../../components';



const Kanye = () => {
    const Artist = {
        name: "Kanye",
        songs: ["Good Morning", "Can't tell me nothing","All Falls Down"],
        description: "Ye, commonly known as Kanye West, is an American rapper, record producer, and fashion designer. He is widely regarded as one of the greatest and most influential hip hop musicians of all time, as well as one of the greatest musicians of his generation."
    }

    const renderSongs = (Artist.songs).map((song, idx) => {
      return(
          <SongList key = {idx} song= {song} />
      )
  })
  return(
      <>

          <SongCard  name={Artist.name} description={Artist.description}/>
          {renderSongs}
          
      </>
  )
}

export default Kanye;
