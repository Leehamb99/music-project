import React from 'react'
import styled from 'styled-components'

import { SongList } from '../../components';
import { ArtistCard } from '../../components';

const BigContainer = styled.div`

    display: flex;
    flex-direction: row;


`


const Wrapper = styled.div`
    background: darkgrey;
    text-align: center;
    width: 40vw;
    margin: 2.5vw;
    color: #f48c15;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: black;
    text-align: center;
    margin: 2.5vw;
    width: 47.5vw;

`;

const Nas = () => {
    const Artist = {
        name: "Nas",
        songs: ["If I ruled the world", "The Message", "The World Is Yours", "Blue Benz"],
        description: "Nasir bin Olu Dara Jones, better known by his stage name Nas, is an American rapper. Rooted in East Coast hip hop, he is regarded as one of the greatest rappers of all time."
    }
    const renderSongs = (Artist.songs).map((song, idx) => {
        return (
            <SongList key={idx} song={song} />
        )
    })
    return (
        <>

            <ArtistCard name={Artist.name} description={Artist.description} />
            <BigContainer>

                <Container>
                <h1>Top Songs</h1>
                    <Wrapper>

                        {renderSongs}
                    </Wrapper>
                </Container>
                <Container>
                    <h1>Liked Songs</h1>
                </Container>
            </BigContainer>

        </>
    )
}

export default Nas;
