import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './layout'
import { Joey, Kanye, Nas } from './pages'
import './style.css'

function App()  {
    return(
    <>
        <Header />
        <Routes>
            <Route path="Joey" element= {<Joey />}> </Route>
            <Route path="Kanye" element= {<Kanye />}> </Route>
            <Route path="Nas" element= {<Nas />}> </Route>

        </Routes>
    </>
    );
}

export default App;
