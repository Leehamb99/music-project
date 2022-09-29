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


const Joey = () => {
    const Artist = {

        name: "Joey Bada$$",
        songs: ["Survival Tactics", "Zipcodes", "Where I Belong", "Let It Breathe"],
        description: "Jo-Vaughn Virginie Scott, known professionally as Joey Badass, is an American rapper, singer, and actor. A native of Brooklyn, New York City, he is a founding member of the hip-hop collective Pro Era, with whom he has released three mixtapes, as well as his numerous solo projects."
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

export default Joey;
