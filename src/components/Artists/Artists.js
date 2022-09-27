import React, { useState } from 'react';

const Artist = (props) => {
    const [selectedArtist, setSelectedArtist] = useState()

    const handleArtist = (e) => {
        e.preventDefault()
        setSelectedArtist(e.target.textContent)
        console.log( {selectedArtist}.selectedArtist )
        return(
            <>
              
            </>
        )
    }



    return (
        <> 
           <p>Click the artist you'd like to explore</p>
           <div>
                <div onClick={handleArtist}>
                    Joey BAD4$$
                </div>
                <div onClick={handleArtist}>
                    Nas
                </div>
                <div onClick={handleArtist}>
                    Kanye
                </div>
           </div>
           <h1>{selectedArtist}</h1>
           
        </>

    )   
 }

 export default Artist;


