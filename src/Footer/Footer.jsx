import React from 'react';

import './Footer.css'

const Footer = () => {
	return (
			<div id='footer'>

				<div id='main'>

					<div id='support' className='footer-section'>
						<div className='footer-header'>Support</div>
						<div className='footer-link'>Discord Community</div>
						<div className='footer-link'>Contact</div>
					</div>
					<div id='documentation' className='footer-section'>
						<div className='footer-header'>Documentation</div>
						<div className='footer-link'>Getting Started</div>
						<div className='footer-link'>Scenes</div>
						<div className='footer-link'>Sources</div>
						<div className='footer-link'>Record</div>
						<div className='footer-link'>Stream</div>
						<div className='footer-link'>Virtual Camera</div>
					</div>
					<div id='project' className='footer-section'>
						<div className='footer-header'>Project</div>
						<div className='footer-link'>GitHub</div>
						<div className='footer-link'>Donates</div>
					</div>
					<div id='about' className='footer-section'>
						<div className='footer-header'>About</div>
						<div className='footer-link'>Privacy</div>
					</div>

					<Logo />

					<div id='footer-personal'>Created and maintained by Harrison Hall</div>

				</div>
				
			</div>	
	);
}
export { Footer }






const Logo = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="23.82" height="25.871" viewBox="0 0 23.82 25.871" id='footer-logo'>
		<path d="M22.5,14.754c.944.548,1.317.979,1.317,1.608s-.373,1.072-1.317,1.62L13.39,23.272a2.89,2.89,0,0,1-1.48.478,2.858,2.858,0,0,1-1.48-.478L1.305,17.982C.361,17.434,0,17,0,16.362s.361-1.06,1.305-1.608l1.847-1.071L5.068,14.8l-2.55,1.461a.125.125,0,0,0-.082.1.127.127,0,0,0,.082.117l8.868,5.081a1.128,1.128,0,0,0,.524.163,1.051,1.051,0,0,0,.513-.163l8.868-5.081a.123.123,0,0,0,.093-.117c0-.047-.035-.082-.093-.1L18.743,14.8l1.915-1.114Z" transform="translate(0 2.121)" fill="#fff"/>
		<path d="M22.5,10.42c.944.559,1.317.979,1.317,1.62S23.447,13.1,22.5,13.648l-9.113,5.3a2.89,2.89,0,0,1-1.48.478,2.858,2.858,0,0,1-1.48-.478l-9.125-5.3C.361,13.1,0,12.681,0,12.04s.361-1.06,1.305-1.62L3.466,9.167l1.923,1.115L2.517,11.923a.127.127,0,0,0-.082.116c0,.058.035.082.082.117l8.868,5.069a1.129,1.129,0,0,0,.524.163,1.051,1.051,0,0,0,.513-.163l8.868-5.069c.058-.035.093-.058.093-.117a.123.123,0,0,0-.093-.116l-2.869-1.64,1.923-1.116ZM7.333,9.17h0l-1.5-.859Zm9.142,0h0l.9-.516Z" transform="translate(0 1.082)" fill="#fff"/>
		<path d="M11.91,15.2a2.89,2.89,0,0,0,1.48-.478L22.5,9.436c.944-.548,1.317-.979,1.317-1.62s-.373-1.06-1.317-1.608L13.39.917A2.89,2.89,0,0,0,11.91.439a2.858,2.858,0,0,0-1.48.478L1.305,6.208C.361,6.756,0,7.187,0,7.816s.361,1.072,1.305,1.62l9.125,5.291A2.858,2.858,0,0,0,11.91,15.2Zm0-2.028a1.128,1.128,0,0,1-.524-.163L2.517,7.933a.127.127,0,0,1-.082-.117.124.124,0,0,1,.082-.1L11.386,2.63a1.128,1.128,0,0,1,.524-.163,1.051,1.051,0,0,1,.513.163l8.868,5.081c.058.023.093.058.093.1a.123.123,0,0,1-.093.117l-8.868,5.081A1.051,1.051,0,0,1,11.91,13.177Z" transform="translate(0 -0.439)" fill="#fff"/>
	</svg>

)