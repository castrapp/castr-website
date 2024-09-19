import React, { useState, useEffect } from 'react';


import './Opensource.css'


const Opensource = () => {



	return (
		<div id='opensource'>
     
			<div id='top'>
				<ThirdRow />
				<SecondRow />
				<FirstRow />
			</div>

			<div id='main'>
				<div id='badge-label'>
					<div id='badge' className='badge'><AccessSVG />Access for all</div>
					<div id="label">Available to everyone.</div>
				</div>
				
				<div id='h3'>100% <br />Open Source</div>

				<div id="github-button" >View on GitHub <OpenSVG /></div>
			</div>

			<div id='bottom'>
				<FirstRow />
				<SecondRow />
				<ThirdRow />
			</div>

		</div>
	);
}
export { Opensource }



const AccessSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="14.993" height="14.993" viewBox="0 0 14.993 14.993">
		<path d="M7.5,14.993a7.552,7.552,0,0,0,7.5-7.5A7.553,7.553,0,0,0,7.489,0,7.546,7.546,0,0,0,0,7.5,7.557,7.557,0,0,0,7.5,14.993Zm0-1.249A6.247,6.247,0,1,1,13.743,7.5,6.217,6.217,0,0,1,7.5,13.743Z" fill="#4397f7"/>
		<path d="M8.7,5.872a25.287,25.287,0,0,1-3.241-.287,1.607,1.607,0,0,0-.2-.029.393.393,0,0,0-.375.419.428.428,0,0,0,.309.419c.243.073,1.911.265,2.124.3a.449.449,0,0,1,.338.47,16.367,16.367,0,0,1-.1,2.161c-.088.551-.728,3.2-.757,3.322a.4.4,0,0,0,.382.537c.206,0,.345-.11.426-.39.125-.537.588-2.374.735-2.815.088-.323.169-.434.353-.434s.257.11.36.434c.125.441.6,2.278.728,2.815.073.279.221.39.426.39a.394.394,0,0,0,.375-.537c-.022-.118-.669-2.771-.757-3.322a20.942,20.942,0,0,1-.081-2.161.43.43,0,0,1,.331-.47c.206-.037,1.881-.228,2.117-.3a.426.426,0,0,0,.316-.419.4.4,0,0,0-.382-.419,1.846,1.846,0,0,0-.2.029A24.915,24.915,0,0,1,8.7,5.872Zm0-.485a.955.955,0,1,0-.955-.955A.958.958,0,0,0,8.7,5.387Z" transform="translate(-1.208 -0.86)" fill="#4397f7"/>
	</svg>
)



const OpenSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="18.68" height="18.68" viewBox="0 0 18.68 18.68">
		<path id="arrow_upward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24" d="M165.779-786.792v-10.051l-4.623,4.623L160-793.4l6.6-6.6,6.6,6.6-1.156,1.176-4.623-4.623v10.051Z" transform="translate(-669.483 452.548) rotate(45)" fill="#e8eaed"/>
	</svg>

)





const FirstRow = () => {
	const [numSquares, setNumSquares] = useState(window.innerWidth < 600 ? 16 : 24);
  
	useEffect(() => {
		const handleResize = () => {
			setNumSquares(window.innerWidth < 600 ? 16 : 24);
		};
	
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
	}, []);
  
	const squareStyle = {
		width: '100%',
		paddingBottom: '100%', // Keeps the height equal to the width (square aspect ratio)
		boxSizing: 'border-box',
		border: 'solid rgb(31, 31, 31) 1px',
	};
  
	const rowStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${numSquares}, 1fr)`, // Dynamically adjust number of columns
	};
  
	const renderSquares = () => Array.from({ length: numSquares }, (_, index) => (
	  	<div key={index} style={squareStyle}></div>
	));
  
	return (
		<div style={rowStyle}>
			{renderSquares()}
		</div>
	);
  };
  





const SecondRow = () => {
  const [numSquares, setNumSquares] = useState(window.innerWidth < 600 ? 16 : 24);
  const [hiddenSquares, setHiddenSquares] = useState(window.innerWidth < 600 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setNumSquares(16); // Use 16 squares below 600px
        setHiddenSquares(1); // Hide first 1 and last 1 below 600px
      } else {
        setNumSquares(24); // Use 24 squares above 600px
        setHiddenSquares(2); // Hide first 2 and last 2 above 600px
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const squareStyle = (index) => ({
    width: '100%',
    paddingBottom: '100%',
    boxSizing: 'border-box',
    border: 'solid rgb(31, 31, 31) 1px',
    opacity: (index < hiddenSquares || index >= numSquares - hiddenSquares) ? 0 : 1, // Adjust based on hiddenSquares
  });

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numSquares}, 1fr)`,
  };

  const renderSquares = () => Array.from({ length: numSquares }, (_, index) => (
    <div key={index} style={squareStyle(index)}></div>
  ));

  return (
    <div style={rowStyle}>
      {renderSquares()}
    </div>
  );
};







  const ThirdRow = () => {
	const [numSquares, setNumSquares] = useState(window.innerWidth < 600 ? 16 : 24);
	const [hiddenSquares, setHiddenSquares] = useState(window.innerWidth < 600 ? 4 : 6);
  
	useEffect(() => {
	  const handleResize = () => {
		if (window.innerWidth < 600) {
		  setNumSquares(16); // Use 16 squares below 600px
		  setHiddenSquares(4); // Hide first 4 and last 4 below 600px
		} else {
		  setNumSquares(24); // Use 24 squares above 600px
		  setHiddenSquares(6); // Hide first 6 and last 6 above 600px
		}
	  };
  
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
  
	const squareStyle = (index) => ({
	  width: '100%',
	  paddingBottom: '100%',
	  boxSizing: 'border-box',
	  border: 'solid rgb(31, 31, 31) 1px',
	  opacity: (index < hiddenSquares || index >= numSquares - hiddenSquares) ? 0 : 1, // Adjust based on hiddenSquares
	});
  
	const rowStyle = {
	  display: 'grid',
	  gridTemplateColumns: `repeat(${numSquares}, 1fr)`,
	};
  
	const renderSquares = () => Array.from({ length: numSquares }, (_, index) => (
	  <div key={index} style={squareStyle(index)}></div>
	));
  
	return (
	  <div style={rowStyle}>
		{renderSquares()}
	  </div>
	);
  };
  