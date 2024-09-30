import React, { useEffect } from 'react';

// import './Privacy.css';


const Privacy = () => {

	useEffect(() => {
		// onStart Animation
		// document.querySelector('#privacy-main').childNodes.forEach((child, index) => {

		// 	child.style.filter = 'blur(10px)';
		// 	child.style.opacity = '0';
			
		// 	child.style.animation = `onStartBlur 0.5s ease-in-out forwards`;
		// 	child.style.animationDelay = `${index * 0.075}s`;
		// });

		// document.querySelector('#privacy-page').style.animationDelay = '0.5s'
		// document.querySelector('#privacy-page').style.animation = `onStartBlur 3s ease-in-out forwards`
	}, [])

	return (
		<div id='privacy-page'>


			<div id='privacy-main'>

				<div id='privacy-left-line'></div>
				<div id='privacy-right-line'></div>

				<div id="privacy-top">
				</div>

				<div id='privacy-top-line'></div>

				<div id="privacy-middle">
					Privacy
				</div>

				<div id='privacy-bottom-line'></div>

				<div id="privacy-bottom">
					Last Updated September 11 2024
				</div>
				
			</div>

			<div id='privacy-description'>
			The privacy policy is simple:<br /><br /> Castr application does not collect any of your personal data, nor any data for that matter. No personal data shared with us will be provided to any third parties under any circumstance without your explicit permission and consent.
			Castr does not engage in any ad targeting, data mining, or other activities that may compromise your privacy, and Castr does not affiliate itself with any third parties that do so.
			</div>

			{/* <div id='privacy-main-container'>
				
				<div id='privacy-header'>
					Privacy Policy
				</div>

				<div id='privacy-subheader'>
					Last Updated September 5 2024
				</div>

				<div id='privacy-text'>
					The privacy policy is simple: no personal data shared with us will be given to any third party, under any circumstances. Your data will also never be used by us for any purpose without specific permission.
					The app engages in no ad targeting, data mining, or other activities that may compromise your privacy, and we do not affiliate ourselves with any third parties that do so.
				</div>

			</div> */}

        </div>
	)
}

export { Privacy }
