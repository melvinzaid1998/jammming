
import React, {useState,useEffect} from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist'
import Track from './components/Track/Track';
import Spotify from './util/spotify'; 


function App() {

  const [playlistName, setPlaylistName] = useState("My Playlist"); 
  const [playlistTracks, setPlaylistTracks] = useState([
    { artist: "A$AP Rocky", song: "A$AP Forever", album: "Testing" } 
  ]);
  const [searchResults, setSearchResults] = useState([
    { artist: "A$AP Rocky", song: "A$AP Forever", album: "Testing" },
    { artist: "Post Malone", song: "Go Flex", album: "Stoney" }, 
    { artist: "Young Thug", song: "Bad Bad Bad", album: "So Much Fun" }, 
    { artist: "A$AP Rocky", song: "Jukebox Joints", album: "At.Long.Last.A$AP" }
  ]); 
  const filteredSearchResults = searchResults.filter(searchSong => !playlistTracks.some(playlistSong => playlistSong.song === searchSong.song))

  const addSongToPlaylist = (song) => {
    setPlaylistTracks((prev) => ([...prev, song]))
  } 

  const removeSongFromPlaylist = (song) => {
    setPlaylistTracks((prev) => prev.filter((track) => (track !== song)))
  }

  const [spotifyToken, setSpotifyToken] = useState('');

  useEffect(() => {
    const token = Spotify.getAccessToken(); 
    if (token){
      setSpotifyToken(token); 
    }
  }, []); 

  if(!spotifyToken){
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Playlist 
      playlistName={playlistName} 
      playlistTracks={playlistTracks}
      setPlaylistName={setPlaylistName}
      removeSongFromPlaylist={removeSongFromPlaylist}/>
      <Tracklist
      tracks={filteredSearchResults}
      addSongToPlaylist={addSongToPlaylist}
      />
    </div>
  );
}

export default App;
