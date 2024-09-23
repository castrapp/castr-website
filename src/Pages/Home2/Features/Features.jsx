import React, { useState, useEffect } from 'react';

import background1 from './backgrounds/background-1.webp';
import background2 from './backgrounds/background-2.webp';
import background3 from './backgrounds/background-3.webp';
import background4 from './backgrounds/background-4.webp';
import background5 from './backgrounds/background-7.webp';

// import './Features.css'


const Features = () => {

	const [padding, setPadding] = useState(0)

	const handlePointerMove = (e) => {
		const target = e.nativeEvent.target
		if(!target.hasAttribute('data-option')) return;
		
		target.focus()
	}

	const handlePointerLeave = () => {
		if(document.activeElement.hasAttribute('data-option')) document.activeElement.blur()
		document.querySelector('#features #backdrop').style.opacity = 0
	}


	const handlePointerClick = (e) => {
		const target = e.nativeEvent.target
		if(!target.hasAttribute('data-option')) return;

		for(const child of document.querySelectorAll('#features #options div[data-option]')) {
			child.removeAttribute('data-selected')
		}
		target.setAttribute('data-selected', '')
	}

	const handleGlobalFocusIn = (e) => {
		if(e.target.hasAttribute('data-option')) {
			const backdrop = document.querySelector('#features #backdrop')

			backdrop.style.opacity = 1
			backdrop.style.left = `${e.target.offsetLeft}px`
			backdrop.style.width = `${e.target.offsetWidth}px`
		}
	}

	const handleResize = () => {
		setPadding(document.querySelector('#features #main').offsetLeft -20)
	};

	useEffect(() => {
		document.addEventListener('focusin', handleGlobalFocusIn);
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			document.removeEventListener('focusin', handleGlobalFocusIn);
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	return (
		<div id='features'>
     
			<div id="main-wrapper">
				<div id="main">
					<div className='badge'><WandSVG />Capabilities</div>
					<div className='h2'><span>Features.</span> Built in, seamless, and easy to use.</div>
					<div 
						id="options" 
						onPointerMove={handlePointerMove}
						onPointerLeave={handlePointerLeave}
						onClick={handlePointerClick}
					>
						<div data-option tabIndex={0} data-selected style={{ marginLeft: 'auto' }}>Scenes</div>
						<div data-option tabIndex={0}>Sources</div>
						<div data-option tabIndex={0}>Recording</div>
						<div data-option tabIndex={0}>Streaming</div>
						<div data-option tabIndex={0} style={{ marginRight: 'auto' }}>Virtual Camera</div>
						<div id="backdrop" />
					</div>


					{/* <div id="buttons">
						<div className='chevron' tabIndex={0} disabled><Chevron /></div>
						<div className='chevron' tabIndex={0}><Chevron /></div>
					</div> */}

				</div>
			</div>


			<div id='features-container'>
				<div style={{ minWidth: `${padding}px` }}/>
				<div className='features-card' style={{ backgroundImage: `url(${background1})` }}></div>
				<div className='features-card' style={{ backgroundImage: `url(${background2})` }}></div>
				<div className='features-card' style={{ backgroundImage: `url(${background3})` }}></div>
				<div className='features-card' style={{ backgroundImage: `url(${background4})` }}></div>
				<div className='features-card' style={{ backgroundImage: `url(${background5})` }}></div>
				<div className='features-card' style={{ backgroundImage: `url(${background1})` }}></div>
				<div style={{ minWidth: `${padding}px` }}/>
			</div>

		</div>
	);
}
export { Features }





const WandSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="13.284" height="13.284" viewBox="0 0 13.284 13.284">
		<path d="M14.835,15.868a.674.674,0,0,0,.96,0,.691.691,0,0,0,0-.96L9.873,8.961a.692.692,0,0,0-.966,0,.711.711,0,0,0,0,.966Zm-3.622-4.283L9.38,9.753c-.112-.112-.143-.237-.037-.343s.231-.075.343.044l1.833,1.833Z" transform="translate(-3.153 -3.17)" fill="#4397f7"/>
		<path d="M18.556,10.635a.542.542,0,1,0,0-1.085h-1.92a.542.542,0,0,0,0,1.085Z" transform="translate(-5.821 -3.454)" fill="#4397f7"/>
		<path d="M14.314,4.344a.542.542,0,0,0,0,.767.561.561,0,0,0,.773,0L16.44,3.752a.542.542,0,0,0-.761-.773Z" transform="translate(-5.119 -1.022)" fill="#4397f7"/>
		<path d="M10.642.542a.545.545,0,0,0-1.091,0v1.92a.545.545,0,1,0,1.091,0Z" transform="translate(-3.454)" fill="#4397f7"/>
		<path d="M4.341,5.113a.542.542,0,0,0,.767-.767L3.756,2.987a.54.54,0,1,0-.767.761Z" transform="translate(-1.025 -1.023)" fill="#4397f7"/>
		<path d="M.542,9.551a.542.542,0,0,0,0,1.085H2.475a.542.542,0,1,0,0-1.085Z" transform="translate(0 -3.454)" fill="#4397f7"/>
		<path d="M2.979,15.67a.544.544,0,1,0,.767.773L5.1,15.085a.54.54,0,0,0-.767-.761Z" transform="translate(-1.021 -5.123)" fill="#4397f7"/>
		<path d="M10.642,16.642a.545.545,0,1,0-1.091,0v1.92a.545.545,0,0,0,1.091,0Z" transform="translate(-3.454 -5.821)" fill="#4397f7"/>
	</svg>
)


const Chevron = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="8.84" height="15.679" viewBox="0 0 8.84 15.679">
		<path d="M2850.267,2848.584a1,1,0,0,1-.707-.293l-6.84-6.84a1,1,0,0,1,0-1.414l6.84-6.84a1,1,0,0,1,1.414,1.414l-6.133,6.133,6.133,6.133a1,1,0,0,1-.707,1.707Z" transform="translate(-2842.427 -2832.904)" fill="rgb(255,255,255)"/>
	</svg>

)