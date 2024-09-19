import React, { useState, useEffect } from 'react';


import './Download.css'


const Download = () => {

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
		<div id='download'>

     		<div id='main'>

				<div id="cross1" className='cross'>
					<div />
					<div />
				</div>

				{renderSquares()}

				<div id="middle">
					<div id="header">Get started today</div>
					<div id='download-button'> Download Castr <ArrowSVG /></div>
				

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
export { Download }








const ArrowSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" id="download-svg">
		<circle id="Ellipse_4" data-name="Ellipse 4" cx="45" cy="45" r="45" fill="#ededed"/>
		<path id="arrow_upward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24" d="M179.134-756.264v-33.28l-15.307,15.307-3.827-3.9L181.868-800l21.868,21.868-3.827,3.9L184.6-789.544v33.28Z" transform="translate(-733.085 -136.868) rotate(90)"/>
	</svg>

)