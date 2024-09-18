import React, { useState, useEffect } from 'react';
import Sketch from './Hero/js/app';


// import { Hero } from './Hero/Hero';
import { Hero } from './Hero2/Hero';
// import { Features } from './Features2/Features';
import { Features } from './Features3/Features';
import { Opensource } from './Opensource/Opensource';
// import { QuickTutorial } from './QuickTutorial/QuickTutorial';
import { QuickTutorial } from './QuickTutorial2/QuickTutorial';
// import { Download } from './Download/Download';
import { Download } from './Download2/Download';


import './Home.css'
// import { SubHero } from './SubHero/SubHero';
import { SubHero } from './SubHero2/SubHero';


const Home = () => {

    const resize = () => {
        const canvas = document.querySelector('#gradient');
        const parentBounds = canvas.parentElement.getBoundingClientRect();

        canvas.width = parentBounds.width
        canvas.height = parentBounds.height

        canvas.style.width = `${parentBounds.width}px`
        canvas.style.height = `${parentBounds.height}px`
    }

    useEffect(() => {
        // const newSketch = new Sketch(document.querySelector('#gradient'))

        // Resize the canvas on window resize
        window.addEventListener('resize', resize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', resize);

    }, [])

	return (
		<div id='home'>

            

            <Hero />

            <SubHero />

            <Features />

            <Opensource />

            <QuickTutorial />


            <Download />

            <div id='home-gradient-container'>
                <div id='gradient-noise' />
                <canvas id="gradient"></canvas>
                <div className="gradient-overlay"/>
            </div>

            {/* <svg display={'none'}>
                <filter id='noiseFilter2'>
                    <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.6' 
                    stitchTiles='stitch'/>
                </filter>
            </svg> */}

		</div>
	);
}
export { Home }