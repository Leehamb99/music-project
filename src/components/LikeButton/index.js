import React, { useState } from 'react';
import styled from 'styled-components';

const LikeButton = () => {
    const [ liked , setLiked ] = useState(false);

    const handleFave = e => {
        e.stopPropagation()
        setLiked(!liked)
    }

    return (
        <span onClick={handleFave} style={{ color: liked ? 'gold' : 'black' }}>★</span>
    );
}

export default LikeButton;
