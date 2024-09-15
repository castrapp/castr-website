import React, { useState, useEffect } from 'react';
import Sketch from './Hero/js/app';


import { Hero } from './Hero/Hero';
import { Features } from './Features2/Features';
import { Opensource } from './Opensource/Opensource';
import { QuickTutorial } from './QuickTutorial/QuickTutorial';
// import { Download } from './Download/Download';


import './Home.css'


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
        const newSketch = new Sketch(document.querySelector('#gradient'))

        // Resize the canvas on window resize
        window.addEventListener('resize', resize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', resize);

    }, [])

	return (
		<div id='home'>

            

            <Hero />

            <Features />

            <Opensource />

            {/* <QuickTutorial /> */}


            {/* <Download /> */}

            <div id='home-gradient-container'>
                <canvas id="gradient"></canvas>
                <div className="gradient-overlay"/>
            </div>

		</div>
	);
}
export { Home }