import React, { useState, useEffect } from 'react';


import './Tutorial.css'


const Tutorial = () => {



	return (
		<div id='tutorial'>
			
			<div id='main'>

				<div id='header-container'>
					<div className='badge'><BookSVG />Tutorial</div>
					<div className='h1'>How it works</div>
				</div>

				<div id='details'>

				</div>

				<div id='preview-wrapper'>
					<div id='preview'></div>

				</div>

			</div>

		</div>
	);
}
export { Tutorial }






const BookSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16.716" height="13.312" viewBox="0 0 16.716 13.312">
		<path d="M4.094,0A4.675,4.675,0,0,0,.087,2.025.887.887,0,0,0,0,2.533V12.775a.51.51,0,0,0,.573.537.669.669,0,0,0,.472-.174,5.153,5.153,0,0,1,3.339-1.19,4.548,4.548,0,0,1,2.954,1.06.421.421,0,0,0,.254.1.286.286,0,0,0,.29-.3V2.069A.561.561,0,0,0,7.73,1.64,4.4,4.4,0,0,0,4.094,0Zm8.529,0A4.4,4.4,0,0,0,8.986,1.64a.56.56,0,0,0-.152.428V12.8a.286.286,0,0,0,.29.3.405.405,0,0,0,.254-.1,4.548,4.548,0,0,1,2.954-1.06,5.153,5.153,0,0,1,3.339,1.19.669.669,0,0,0,.472.174.51.51,0,0,0,.573-.537V2.533a.874.874,0,0,0-.087-.508A4.675,4.675,0,0,0,12.623,0Z" transform="translate(0)" fill="#4397f7"/>
	</svg>
)