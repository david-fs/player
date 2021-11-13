import React from 'react';
import './App.css';
import FramePlayer from "./components/FramePlayer/FramePlayer";


function App() {
    const imagesArray:string[] = [
        "src/Images/1.jpg",
        "src/Images/2.jpg",
        "src/Images/3.jpg",
        "src/Images/4.jpg",
        "src/Images/5.jpg",
        "src/Images/6.jpg"
    ]
  return (
    <div className="App">
      <header className="App-header">
        <FramePlayer  fps={0.2} frames={["1","2","3","4"]}/>
      </header>
    </div>
  );
}

export default App;
