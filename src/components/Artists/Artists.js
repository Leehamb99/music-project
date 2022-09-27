import React, { useState } from 'react';
import SongCard from '../SongCard/SongCard';
import SongList from '../SongSection/SongSection'


        
    


const Artist = () => {
    
    const Artist1 = {
    
        name: "Joey Bada$$",
        songs: ["Survival Tactics", "Zipcodes", "Where I Belong", "Let It Breathe"],
        description: "Jo-Vaughn Virginie Scott, known professionally as Joey Badass, is an American rapper, singer, and actor. A native of Brooklyn, New York City, he is a founding member of the hip-hop collective Pro Era, with whom he has released three mixtapes, as well as his numerous solo projects."
}

    const Artist2 = {
        name: "Kanye",
        songs: ["Good Morning", "Can't tell me nothing","All Falls Down"],
        description: "Ye, commonly known as Kanye West, is an American rapper, record producer, and fashion designer. He is widely regarded as one of the greatest and most influential hip hop musicians of all time, as well as one of the greatest musicians of his generation."
    }

    const Artist3 = {
        name: "Nas",
        songs: ["If I ruled the world", "The Message", "The World Is Yours", "Blue Benz"],
        description: "Nasir bin Olu Dara Jones, better known by his stage name Nas, is an American rapper. Rooted in East Coast hip hop, he is regarded as one of the greatest rappers of all time."
    }
    const [selectedArtist, setSelectedArtist] = useState()




    const handleArtist = (e) => {
        e.preventDefault()
        setSelectedArtist(e.target.textContent)
    }

    if (selectedArtist === "Joey Bada$$"){
        const renderSongs = (Artist1.songs).map((song, idx) => {
            return(
                <SongList key = {idx} song= {song} />
            )
        })
        return(
            <>
                <SongCard  name={Artist1.name} description={Artist1.description}/>
                {renderSongs}
                
            </>
        )

    }
    else if (selectedArtist === "Kanye"){
        const renderSongs = (Artist2.songs).map((song, idx) => {
            return(
                <SongList key = {idx} song= {song} />
            )
        })
        return(
            <>
                <SongCard name={Artist2.name} description={Artist2.description}/>
                {renderSongs}
            </>
        )
        }
    else if (selectedArtist === "Nas"){
        const renderSongs = (Artist3.songs).map((song, idx) => {
            return(
                <>
                
                <SongList key = {idx} song= {song} />
                {renderSongs}
                </>
            )
        })
        return(
            <>
                <SongCard name={Artist3.name} description={Artist3.description} />
            </>
        )



    }else{
    return (
        <> 
           <p>Click the artist you'd like to explore</p>
           <div>
                <div onClick={handleArtist}>
                    Joey Bada$$
                </div>
                <div onClick={handleArtist}>
                    Kanye
                </div>
                <div onClick={handleArtist}>
                    Nas
                </div>
           </div>
           <h1>{selectedArtist}</h1>
           
        </>

    )   
    }
 }

 export default Artist;


