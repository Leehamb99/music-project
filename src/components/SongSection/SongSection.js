import React from 'react';
import styled from "styled-components";
import { default as LikeButton } from '../LikeButton'

const Song = styled.div`
    border-style: solid;
    border-color: black;
    padding: 5px;
    color: black;

`

const Button = styled.div`
    color: black;
`



const SongList = (props) => {
    return(
        <>
            
           <Song> <LikeButton /> {props.song} </Song>
            
        </>
    )
}

export default SongList;
