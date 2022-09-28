import React from 'react';
import { Header } from '../../layout';
import { SongList } from '../../components';
import { SongCard } from '../../components'


const Joey = () => {
    const Artist = {
    
        name: "Joey Bada$$",
        songs: ["Survival Tactics", "Zipcodes", "Where I Belong", "Let It Breathe"],
        description: "Jo-Vaughn Virginie Scott, known professionally as Joey Badass, is an American rapper, singer, and actor. A native of Brooklyn, New York City, he is a founding member of the hip-hop collective Pro Era, with whom he has released three mixtapes, as well as his numerous solo projects."
}
       
        const renderSongs = (Artist.songs).map((song, idx) => {
            return(
                <SongList key = {idx} song= {song} />
            )
        })
        return(
            <>
           <div>
                <Header />
           </div>
                <SongCard  name={Artist.name} description={Artist.description}/>
                {renderSongs}
                
            </>
        )
        
    
}

export default Joey;
