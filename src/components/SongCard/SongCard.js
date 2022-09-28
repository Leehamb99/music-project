import React from 'react';


const SongCard = (props) => {
    return(
        <div class="text">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h1>List Of Songs</h1>
        </div>
    )

}

export default SongCard;
