import React from 'react'
import styled from 'styled-components'

import { SongList } from '../../components';
import { SongCard } from '../../components';

const Wrapper = styled.div`
    background: darkgrey;
    text-align: center;
`;

const Nas = () => {
    const Artist = {
        name: "Nas",
        songs: ["If I ruled the world", "The Message", "The World Is Yours", "Blue Benz"],
        description: "Nasir bin Olu Dara Jones, better known by his stage name Nas, is an American rapper. Rooted in East Coast hip hop, he is regarded as one of the greatest rappers of all time."
    }
    const renderSongs = (Artist.songs).map((song, idx) => {
      return(
          <SongList key = {idx} song= {song} />
      )
  })
  return(
      <>

          <SongCard  name={Artist.name} description={Artist.description}/>
          <Wrapper>

          {renderSongs}
          </Wrapper>
          
      </>
  )
}

export default Nas;
