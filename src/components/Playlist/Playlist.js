import Tracklist from '../Tracklist/Tracklist';
import React, {useState} from 'react';


function Playlist({ playlistName, playlistTracks, setPlaylistName, removeSongFromPlaylist }){
    const [isEditing,setIsEditing] = useState(false); 
    
    return (
        <div>
            
            {isEditing ? (
                <input 
                value={playlistName}
                onChange={(e) => (setPlaylistName(e.target.value))}
                onBlur = {() => setIsEditing(false)}
                autoFocus
                />
            ) : (
                <h1 onClick={() => setIsEditing(true)}>
                    {playlistName || "New Playlist"}
                </h1>
            )}
            
            
            <Tracklist 
            tracks={playlistTracks} 
            removeSongFromPlaylist={removeSongFromPlaylist}/>
            <button>Save To Spotify</button>
        </div>
        
    ); 
}

export default Playlist; 

