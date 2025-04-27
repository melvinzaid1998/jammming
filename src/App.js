import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Tracklist/Tracklist'
import Tracklist from './components/Tracklist/Tracklist';

function App() {

  const testData = [
    { artist: "Post Malone", song: "Go Flex", album: "Stoney" }, 
    { artist: "Young Thug", song: "Bad Bad Bad", album: "So Much Fun" }, 
    { artist: "A$AP Rocky", song: "Jukebox Joints", album: "At.Long.Last.A$AP" }, 
  ];
    


  return (
    <div>
      <Tracklist tracks={testData}/>
    </div>
  );
}

export default App;
