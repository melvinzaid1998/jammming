import React from 'react';
import Track from '../Track/Track';

function Tracklist({ tracks, addSongToPlaylist, removeSongFromPlaylist }){
    return (
        <div>
          {addSongToPlaylist ? <h2>Suggested Songs</h2> : <h2> Your Playlist</h2>}
          {addSongToPlaylist ? (
            //When addSongToPlaylist is true
            tracks.map((searchSong, idx) => (
              <div key={idx}>
                <p>{searchSong.song} by {searchSong.artist}</p>
                <button onClick= {() => addSongToPlaylist(searchSong)}> Add to Playlist </button>
              </div>
            ))
          ) : (
            //When addSongToPlaylist is false
            tracks.map((track,index) => (
            <div key = {index}>
              <Track 
                artist= {track.artist}
                song = {track.song}
                album = {track.album}
                />
              <button onClick= {() => removeSongFromPlaylist(track)}> Remove </button>
            </div>
              
          ))
            
          )}    
          
        </div>
      );
}

export default Tracklist;