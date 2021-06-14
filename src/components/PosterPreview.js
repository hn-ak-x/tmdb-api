import React from 'react';

const IMG_API = 'http://image.tmdb.org/t/p/w1280';

const PosterPreview = ({url}) => {
    return (
        <img src={IMG_API + url} alt=""/>
    )
}

export default PosterPreview;