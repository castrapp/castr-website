import React, { useState, useEffect } from 'react';


import './Hero.css'


const Hero = () => {

	const [numSquares, setNumSquares] = useState(window.innerWidth < 600 ? 8 : 12);

	const renderSquares = () => Array.from({ length: numSquares }, (_, index) => (
	  <div key={index} className="square"></div>
	));

	useEffect(() => {
	  const handleResize = () => setNumSquares(window.innerWidth < 600 ? 8 : 12);
	  
	  window.addEventListener('resize', handleResize);

	  return () => {
		window.removeEventListener('resize', handleResize)
	  }
	}, [])
  


	return (
		<div id='hero'>

			<div id='main'>

				<div id="cross1" className='cross'>
					<div />
					<div />
				</div>

				{renderSquares()}

				<div id="middle">

					<div className='badge'><MacbookSVG />For MacOS 13.0+</div>

					<div className='h1'>Create with Castr</div>

					<div id="description">
					An open-source, real-time media capture application for video recording and streaming, built natively for MacOS.
					</div>

					<button className='button1'>Download</button>

				</div>

				{renderSquares()}

				<div id='cross2' className='cross'>
					<div />
					<div />
				</div>

			</div>
     
		</div>
	);
}
export { Hero }





const MacbookSVG = () => (
	<svg 
		id="macbook" 
		width="19.393" 
		height="10.815" 
		viewBox="0 0 19.393 10.815"
	>
		<rect width="19.393" height="10.815" opacity="0"/>
		<path d="M4.814,9.811V2.229a.563.563,0,0,1,.637-.637H16.778a.563.563,0,0,1,.637.637V9.811Z" transform="translate(-1.541 -0.51)" fill="rgba(67,151,247,0.4)"/>
		<path d="M7.568,1.088h.166c.1,0,.153.046.153.159v.073a.439.439,0,0,0,.465.465h2.456a.427.427,0,0,0,.445-.465V1.248c0-.113.053-.159.166-.159h.166V.537H7.568ZM0,10.064a.755.755,0,0,0,.75.757H18.4a.757.757,0,0,0,0-1.514H16.943V1.427A1.263,1.263,0,0,0,15.522.02H3.625A1.283,1.283,0,0,0,2.2,1.427v7.88H.75A.755.755,0,0,0,0,10.064Zm3.273-.757V1.726a.563.563,0,0,1,.637-.637H15.237a.563.563,0,0,1,.637.637V9.307Z" transform="translate(0 -0.006)" fill="#4397f7"/>
	</svg>
)


