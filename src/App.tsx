import React from 'react';
import './App.css';
import FramePlayer from "./components/FramePlayer/FramePlayer";


function App() {
    const imagesArray: { url: string }[] = [
        {url: "https://live.staticflickr.com/65535/51677313191_0b2cd890e6.jpg"},
        {url: "https://live.staticflickr.com/65535/51677560763_6986b9ce68.jpg"},
        {url: "https://live.staticflickr.com/65535/51677984869_35a6fafd4f.jpg"},
        {url: "https://live.staticflickr.com/65535/51677313136_1d62f66b5c.jpg"},
        {url: "https://live.staticflickr.com/65535/51677560883_4b15402fe2.jpg"},
        {url: "https://live.staticflickr.com/65535/51677560688_f54edde424.jpg"},
    ]
    return (
        <div className="App">
            <header className="App-header">
                <FramePlayer fps={0.2} frames={imagesArray}/>
            </header>
        </div>
    );
}

export default App;
