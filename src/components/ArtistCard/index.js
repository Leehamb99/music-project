import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
    text-align: center;

`


const ArtistCard = (props) => {
    return(
        <Header>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </Header>
    )

}

export default ArtistCard;
