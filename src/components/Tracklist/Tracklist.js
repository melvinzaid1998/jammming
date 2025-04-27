import React from 'react';
import Track from '../Track/Track';

function Tracklist({ tracks }){
    return (
        <div>
          {tracks.map((track,index) => (
            <Track 
              key = {index}
              artist= {track.artist}
              song = {track.song}
              album = {track.album}
              />
          ))}
        </div>
      );
}

export default Tracklist;