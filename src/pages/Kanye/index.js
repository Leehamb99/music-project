import React from 'react';
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

`


const Kanye = () => {
    const Artist = {
        name: "Kanye",
        songs: ["Good Morning", "Can't tell me nothing", "All Falls Down"],
        description: "Ye, commonly known as Kanye West, is an American rapper, record producer, and fashion designer. He is widely regarded as one of the greatest and most influential hip hop musicians of all time, as well as one of the greatest musicians of his generation."
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
                    <Wrapper>

                    </Wrapper>
                </Container>
            </BigContainer>

        </>
    )
}

export default Kanye;
