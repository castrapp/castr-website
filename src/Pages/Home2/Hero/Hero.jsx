import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import './Hero.css'


const Hero = () => {

	const navigate = useNavigate()
    const location = useLocation()

	const [numSquares, setNumSquares] = useState(window.innerWidth < 600 ? 8 : 12);

	const navigateTo = (path) => {
        document.querySelector('#html').removeAttribute("mobile-menu-opened");

        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
    }

// const renderSquares = () => Array.from({ length: numSquares }, (_, index) => {
//     const delay = 1.8 + (index * 0.05);  // Add 2.25s start delay + 0.2s for each subsequent square
//     return (
//         <div
//             key={index}
//             className="square"
//             style={{
//                 animation: `squaresBorder 0s  steps(1) forwards`, // 1s is the duration of the animation
//                 animationDelay: `${delay}s`  // Delay before each animation starts
//             }}
//         ></div>
//     );
// });

const renderSquares = (reverse = false) => Array.from({ length: numSquares }, (_, index) => {
    // Calculate index based on reverse or normal order
    const delayIndex = reverse ? numSquares - index - 1 : index;
    const delay = 1.4 + (delayIndex * 0.065);    // Calculate delay based on reverse or normal order

    // Set the animation name based on the reverse flag
    const animationName = reverse ? 'squaresTransformReversed' : 'squaresTransform';

    // Set the transform based on the reverse flag
    const initialTransform = reverse ? 'translateY(100%)' : 'translateY(-100%)';

    return (
        <div
            key={index}
            className="square"
            style={{
                transform: initialTransform,  // Set initial transform
                animation: `${animationName} 1s cubic-bezier(0.65, 0.02, 0, 0.99) forwards`,  // Set the correct animation based on the reverse flag
                animationDelay: `${delay}s`
            }}
        ></div>
    );
});



	useEffect(() => {
		const handleResize = () => setNumSquares(window.innerWidth < 600 ? 8 : 12);
	  
		window.addEventListener('resize', handleResize);


		// Iterate through its children
		document.querySelector('#hero #middle').childNodes.forEach((child, index) => {

			child.style.filter = 'blur(10px)';
            child.style.opacity = '0';
			
			child.style.animation = `onStartBlur 1s ease-in-out forwards`;
			child.style.animationDelay = `${1.5 + index * 0.2}s`;
		});


	  return () => {
		window.removeEventListener('resize', handleResize)
	  }
	}, [])
  


	return (
		<div id='hero'>

		<div id='main-cube'>
			<div id="cross1" className='cross'>
				<div />
				<div />
			</div>
			<div id='main3'></div>
			<div id='main2'></div>
			<div id='main'>

				{/* <div style={{ gridArea: "top", width: '100%', paddingBottom: '100%' }}> */}
				{renderSquares()}
				{/* </div> */}

				<div id="middle">

					<div className='badge'><MacbookSVG />For MacOS 13.0+</div>

					<div className='h1'>Create with Castr</div>

					<div id="description">
					An open-source, real-time media capture application for video recording and streaming, built natively for MacOS.
					</div>

					<button className='button1' onClick={() => navigateTo('/download')}>
						Download
						<div>
							<div></div>
							<div></div>
						</div>
					</button>

				</div>

				{renderSquares(true)}
			
				{/* <div style={{ gridArea: "bottom" }}>
					{renderSquares()}
				</div> */}

			</div>

			<div id='cross2' className='cross'>
				<div />
				<div />
			</div>
		</div>


			<div id="hero-overlay"></div>
			
				

		

			<TempLogoSvg />
     
		</div>
	);
}
export { Hero }





const MacbookSVG = () => (
	<svg 
		id="macbook" 
		width="19.393" 
		height="10.815" 
		style={{ minWidth: '19.393px', minHeight: '10.815px' }}
		viewBox="0 0 19.393 10.815"
	>
		<rect width="19.393" height="10.815" opacity="0"/>
		<path d="M4.814,9.811V2.229a.563.563,0,0,1,.637-.637H16.778a.563.563,0,0,1,.637.637V9.811Z" transform="translate(-1.541 -0.51)" fill="rgba(67,151,247,0.4)"/>
		<path d="M7.568,1.088h.166c.1,0,.153.046.153.159v.073a.439.439,0,0,0,.465.465h2.456a.427.427,0,0,0,.445-.465V1.248c0-.113.053-.159.166-.159h.166V.537H7.568ZM0,10.064a.755.755,0,0,0,.75.757H18.4a.757.757,0,0,0,0-1.514H16.943V1.427A1.263,1.263,0,0,0,15.522.02H3.625A1.283,1.283,0,0,0,2.2,1.427v7.88H.75A.755.755,0,0,0,0,10.064Zm3.273-.757V1.726a.563.563,0,0,1,.637-.637H15.237a.563.563,0,0,1,.637.637V9.307Z" transform="translate(0 -0.006)" fill="#4397f7"/>
	</svg>
)





const TempLogoSvg = () => {
	return (
		<svg id='temp-logo-svg' xmlns="http://www.w3.org/2000/svg" width="259.368" height="281.707" viewBox="0 0 259.368 281.707">
			<g id="Group_126" data-name="Group 126" transform="translate(0 -7.681)">
			    <path id="Path_9" data-name="Path 9" 
			          d="M245.029,25.346C255.3,31.315,259.368,36,259.368,42.859S255.3,54.535,245.029,60.5L145.8,118.118
			             a31.526,31.526,0,0,1-16.111,5.2,31.124,31.124,0,0,1-16.111-5.2L14.219,60.5C3.935,54.535,0,49.838,0,42.859S3.935,31.271,
			             14.208,25.346L34.319,13.682,55.18,25.836,27.405,41.718a1.359,1.359,0,0,0-.891,1.141,1.381,1.381,0,0,0,.891,1.272l96.522,
			             55.322a12.284,12.284,0,0,0,5.707,1.772,11.447,11.447,0,0,0,5.588-1.772l96.566-55.322a1.337,1.337,0,0,0,1.011-1.272c0-.511
			             -.38-.891-1.011-1.141l-27.7-15.882L224.94,13.7Z" 
			          transform="translate(0 166.074)" fill="#fff"/>
			    <path id="Path_10" data-name="Path 10" 
			          d="M245.029,31.27C255.3,37.358,259.368,41.924,259.368,48.9S255.3,60.448,245.029,66.416L145.8,124.151a31.525,
			             31.525,0,0,1-16.111,5.207,31.123,31.123,0,0,1-16.111-5.207L14.219,66.416C3.935,60.458,0,55.893,0,48.914S3.935,
			             37.369,14.208,31.281L37.733,17.627,58.7,29.77l-31.3,17.872a1.381,1.381,0,0,0-.891,1.272c0,.631.38.891.891,1.272l96.522,
			             55.191a12.284,12.284,0,0,0,5.707,1.783,11.447,11.447,0,0,0,5.588-1.783l96.566-55.2c.631-.38,1.011-.63,1.011-1.272a1.337,
			             1.337,0,0,0-1.011-1.272l-31.232-17.85,20.937-12.154ZM79.846,17.671h0L63.54,8.311Zm99.544,0h0l9.784-5.609Z" 
			          transform="translate(0 101.654)" fill="#fff"/>
			    <path id="Path_11" data-name="Path 11" 
			          d="M129.678,161.219a31.526,31.526,0,0,0,16.111-5.207L245.018,98.4c10.273-5.968,14.339-10.664,14.339-17.633s
			             -4.066-11.545-14.339-17.513L145.8,5.646A31.525,31.525,0,0,0,129.678.439a31.123,31.123,0,0,0-16.111,5.207L14.208,63.262
			             C3.935,69.219,0,73.937,0,80.764S3.935,92.417,14.208,98.407l99.36,57.616a31.123,31.123,0,0,0,16.111,5.2Zm0-22.079
			             a12.284,12.284,0,0,1-5.707-1.772L27.405,82.036a1.381,1.381,0,0,1-.891-1.272,1.359,1.359,0,0,1,.891-1.141L123.928,24.3
			             a12.284,12.284,0,0,1,5.707-1.772,11.447,11.447,0,0,1,5.588,1.772l96.566,55.322c.631.25,1.011.631,1.011,1.141a1.337,
			             1.337,0,0,1-1.011,1.272l-96.566,55.322a11.447,11.447,0,0,1-5.544,1.8Z" 
			          transform="translate(0 7.242)" fill="#fff"/>
			</g>
		</svg>

	)
}