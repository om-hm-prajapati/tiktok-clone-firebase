import React from 'react'
import Video from "./Video";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>hii om</h1>
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
