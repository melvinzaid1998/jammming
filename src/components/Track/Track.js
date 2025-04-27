import React from "react";


function Track({ artist,song,album }){
    return (
        <div>
            <h2>{song}</h2>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
        </div>
    );
}

export default Track;