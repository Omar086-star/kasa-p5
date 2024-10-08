import React, { useEffect, useState } from 'react';
import "./index.scss";
import Home from "./Pages/home/Home.js";

function App() {
    
    const [stylesLoaded, setStylesLoaded] = useState(false);

    useEffect(() => {
        const link = document.querySelector('link[rel="stylesheet"]');
        if (link) {
            link.onload = () => setStylesLoaded(true);
            link.onerror = () => {
                console.error("Failed to load styles");
                setStylesLoaded(true); // Proceed even if there's an error
            };
        } else {     
            setStylesLoaded(true); // Proceed if there's no stylesheet link
        }
    }, []);

    if (!stylesLoaded) {
        return <div>
        <Home />
    </div>; 
        
    }
 
}

export default App;
