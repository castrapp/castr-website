import React, { useState, useEffect } from 'react';


// import './Home.css'
import { Hero } from './Hero/Hero';
import { Subhero } from './Subhero/Subhero';
import { Features } from './Features/Features';
import { Opensource } from './Opensource/Opensource';
import { Tutorial } from './Tutorial/Tutorial';
import { Download } from './Download/Download';


const Home = () => {



	return (
		<div id='home'>

			<Hero />

			<Subhero />

			<Features />

			<Opensource />

			{/* <Tutorial /> */}

			<Download />
     

		</div>
	);
}
export { Home }