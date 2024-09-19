import React, { useState, useEffect } from 'react';


import './Subhero.css'


const Subhero = () => {



	return (
		<div id='subhero'>
            
            <div id='main'>
                <div className='badge'><LayoutIcon />Layout</div>
                <div className='h2'><span>Design.</span> Tailored for MacOS.</div>
            </div>

		</div>
	);
}
export { Subhero }







const LayoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13.011" height="11.301" viewBox="0 0 13.011 11.301">
        <path d="M4.483,7.5h5.991V5.925H4.483a.789.789,0,1,0,0,1.579ZM12.136,9.13A2.422,2.422,0,1,0,9.721,6.7,2.427,2.427,0,0,0,12.136,9.13Zm0-1.232a1.174,1.174,0,0,1-1.184-1.2,1.184,1.184,0,1,1,2.368,0A1.182,1.182,0,0,1,12.136,7.9ZM13.715,7.5h2.212a.784.784,0,0,0,.765-.789.792.792,0,0,0-.765-.789H13.715Zm2.165,4.867H9.9V13.95H15.88a.79.79,0,1,0,0-1.578ZM8.226,10.733a2.428,2.428,0,1,0,2.416,2.44A2.43,2.43,0,0,0,8.226,10.733Zm0,1.244a1.19,1.19,0,1,1-1.184,1.2A1.174,1.174,0,0,1,8.226,11.977Zm-1.567.395H4.435a.79.79,0,0,0,0,1.578H6.659Z" transform="translate(-3.682 -4.287)" fill="#4397f7"/>
    </svg>

)