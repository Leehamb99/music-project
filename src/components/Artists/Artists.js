import React, { useState } from 'react';

const Artist = () => {
    const [Artist, setArtist] = useState("")

    const handleArtist = (e) => {
        setArtist(e)
    }

    return (
        <> 
           <p>Click the artist you'd like to explore</p>
           <div>
                <div>
                    Joey BAD4$$
                </div>
                <div>
                    Nas
                </div>
                <div>
                    Kanye
                </div>
           </div>
           
           
        </>

    )   
 }

 export default Artist;
