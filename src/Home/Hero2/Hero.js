import React, { useState, useEffect } from 'react';

import './Hero.css'



const Hero = () => {


    return (
        <div id="home-hero">

            <div id="hero-badge">For MacOS 13.0+</div>
            <div id="hero-header">Create, Customize, Cast.</div>
            <div id="hero-subheader">A free and open-source, screen casting application for video recording and streaming, built natively for MacOS.</div>

            <div id="hero-learn-more">Learn more below.</div>
            <button id="hero-download">Download</button>

            <LearnMoreArrow />
        </div>
    )
}

export { Hero }







const LearnMoreArrow = () => (
    <svg 
        id='learn-more-arrow'
        xmlns="http://www.w3.org/2000/svg" 
        width="26" 
        height="8" 
        viewBox="0 0 26 8" 
        fill="none" 
        className="animate-bounce stroke-2"
    >
        
        <path 
            d="M1 1L12.5528 6.77639C12.8343 6.91716 13.1657 6.91716 13.4472 6.77639L25 1"  
            strokeLinecap="round"
            >
        </path>
        
    </svg>
)