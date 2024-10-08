import React, { useState, useEffect } from 'react';

import background1 from './backgrounds/background-1.webp';
import background2 from './backgrounds/background-2.webp';
import background3 from './backgrounds/background-3.webp';
import background4 from './backgrounds/background-4.webp';
import background5 from './backgrounds/background-7.webp';

// import './Features.css'


const Features = () => {

	let set = false;

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



		// Scroll to selected element
		const id = e.target.getAttribute('data-option')
		if(!id) return

		const targetElement = document.querySelector(`#${id}`);
		const container = document.querySelector('#features-container');

		// Scroll the element into view horizontally
		targetElement.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',  // Don't touch vertical scroll
			inline: 'center'   // Center horizontally
		});
		console.log('handling scroll select ', e.target.getAttribute('data-option'))
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

	const handleTouchMove = (e) => {
		console.log('touch is moving my prend: ', e)
		// e.preventDefault()
	}

	const handleTouchStart = (e) => {
		console.log('touch is starting: ', e)
		e.preventDefault()
	}
	

	useEffect(() => {

		const featureContainer = document.querySelector('#features-container');
		const features = document.querySelector('#features');
		const featuresContainer = document.querySelector('#features-container');

		document.addEventListener('focusin', handleGlobalFocusIn);
		window.addEventListener('resize', handleResize);
		// featureContainer.addEventListener('touchmove', handleTouchMove)
		// featureContainer.addEventListener('touchstart', handleTouchStart, {passive: false})

		handleResize();

		const onObserve = (entries, observer) => {
            entries.forEach(entry => {
				// console.log('observing')

				let scrollTopNormalized = entry.boundingClientRect.y /  entry.rootBounds.height 
	            scrollTopNormalized = Math.max(0, Math.min(scrollTopNormalized, 1))
                scrollTopNormalized = 1 - scrollTopNormalized

				if(scrollTopNormalized > .4) {
					// console.log('scroll top is above .4')
					let delay = 0
					if(set == true) return;
					for(const child of featureContainer.children) {
						// console.log('child animation is: ', child.style.animation)
						if(!child.style.animation) child.style.animation = `onScale 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`
						delay += 200
					}
					set = true
				} else {
					// console.log('scroll top is not above .4')
				}
				
				// console.log('scroll top normalized: ', scrollTopNormalized)
			})
		}


		  // Intersection Observer for subhero
        const observer = new IntersectionObserver(onObserve, {
            root: null, // Default to viewport
            rootMargin: '0px', 
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
        })

        observer.observe(features);

		return () => {
			document.removeEventListener('focusin', handleGlobalFocusIn);
			window.removeEventListener('resize', handleResize);
			featureContainer.removeEventListener('touchmove', handleTouchMove)
			featureContainer.removeEventListener('touchstart', handleTouchStart)
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
						<div data-option="features-scenes-card" tabIndex={0} data-selected style={{ marginLeft: 'auto' }}>Scenes</div>
						<div data-option="features-sources-card" tabIndex={0}>Sources</div>
						<div data-option="features-stream-card" tabIndex={0}>Streaming</div>
						<div data-option="features-record-card" tabIndex={0}>Recording</div>
						<div data-option="features-camera-card" tabIndex={0}>Virtual Camera</div>
						<div data-option="features-native-card" tabIndex={0} style={{ marginRight: 'auto' }}>Native for MacOS</div>
						<div id="backdrop" />
					</div>


					{/* <div id="buttons">
						<div className='chevron' tabIndex={0} disabled><Chevron /></div>
						<div className='chevron' tabIndex={0}><Chevron /></div>
					</div> */}

				</div>
			</div>


			<div id='features-container'>
				{/* <div className='feature-card-padding'/> */}
				<div style={{ minWidth: `${padding}px` }}></div>
				
				<div className='features-card' id="features-scenes-card">
					<div className='features-card-blur'></div>
					<div className='features-card-background'>
					    <ScenesSvg />
					    <div className='features-card-background-image' style={{ background: `url(${background1})` }}></div>
					</div>
					<div className='features-card-header'>Scenes</div>
					<div className='features-card-description'>Scenes let you build tailored layouts by combining multiple sources.</div>
				</div>
				
				<div className='features-card' id="features-sources-card">
					<div className='features-card-blur'></div>
					<div className='features-card-background'>
						<SourcesSvg />
					    <div className='features-card-background-image' style={{ background: `url(${background2})` }}></div>
					</div>
					<div className='features-card-header'>Sources</div>
					<div className='features-card-description'>Sources are various media types you can integrate into your scenes like screen captures, images, webcams and more.</div>
				</div>
				
				<div className='features-card' id="features-stream-card">
					<div className='features-card-blur'></div>
					<div className='features-card-background'>
					    {/* <StreamSvg /> */}
					    <div className='features-card-background-image' style={{ background: `url(${background3})` }}></div>
					</div>
					<div className='features-card-header'>Stream</div>
					<div className='features-card-coming-soon'>Coming soon</div>
					<div className='features-card-description'>Stream your content in real-time to multiple platforms with seamless integration.</div>
				</div>
				
				<div className='features-card' id="features-record-card">
					<div className='features-card-blur'></div>
					<div className='features-card-background'>
					    {/* <RecordSvg /> */}
					    <div className='features-card-background-image' style={{ background: `url(${background4})` }}></div>
					</div>
					<div className='features-card-header'>Record</div>
					<div className='features-card-coming-soon'>Coming soon</div>
					<div className='features-card-description'>Record your content in crystal-clear quality while streaming or offline.</div>
				</div>
				
				<div className='features-card' id="features-camera-card">
					<div className='features-card-blur'></div>
					<div className='features-card-background'>
					    <VirtualCameraSvg />
					    <div className='features-card-background-image' style={{ background: `url(${background5})` }}></div>
					</div>
					<div className='features-card-header'>Virtual Camera</div>
					<div className='features-card-description'>Use your custom scenes as a live video source in other applications like Zoom or Skype through Castr's Virtual Camera.</div>
				</div>
				
				<div className='features-card' id="features-native-card">
					<div className='features-card-blur'></div>
					<div className='features-card-background'>
					    {/* <NativeSvg /> */}
					    <div className='features-card-background-image' style={{ background: `url(${background1})` }}></div>
					</div>
					<div className='features-card-header'>Native for MacOS</div>
					<div className='features-card-description'>Built specifically for macOS, enjoy a fully optimized experience with native performance and integration.</div>
				</div>

				<div id="last-feature-card" style={{ width: `${padding}px` }}></div>
				{/* <div className='feature-card-padding'/> */}

			</div>

		</div>
	);
}
export { Features }




const ScenesSvg = () => (
	<svg id="scenes-svg" xmlns="http://www.w3.org/2000/svg" width="270.871" height="298.153" viewBox="0 0 270.871 298.153">
  <g id="Rectangle_13" data-name="Rectangle 13" transform="translate(0.002)" fill="rgba(56,44,42,0.5)">
    <path d="M5.985,0h258.9a5.98,5.98,0,0,1,5.985,5.985V292.168a5.98,5.98,0,0,1-5.985,5.985H5.985A5.98,5.98,0,0,1,0,292.168V5.985A5.98,5.98,0,0,1,5.985,0Z" stroke="none"/>
    <path d="M 264.885498046875 297.1555480957031 C 265.5730590820312 297.1555480957031 266.2285461425781 297.0156860351562 266.8250732421875 296.7629699707031 C 267.4216003417969 296.5102233886719 267.9591064453125 296.1446228027344 268.4107055664062 295.6930236816406 C 268.8622741699219 295.2414245605469 269.2279052734375 294.7039489746094 269.4806518554688 294.107421875 C 269.7333679199219 293.5108947753906 269.8732299804688 292.8553771972656 269.8732299804688 292.1678161621094 L 269.8732299804688 5.985279083251953 C 269.8732299804688 5.297718524932861 269.7333679199219 4.642204761505127 269.4806518554688 4.0456862449646 C 269.2279052734375 3.449167490005493 268.8622741699219 2.911644458770752 268.4107055664062 2.460066556930542 C 267.9591064453125 2.008488416671753 267.4216003417969 1.642855763435364 266.8250732421875 1.390117287635803 C 266.2285461425781 1.137379050254822 265.5730590820312 0.9975352883338928 264.885498046875 0.9975352883338928 L 5.985288619995117 0.9975352883338928 C 5.297728061676025 0.9975352883338928 4.642213821411133 1.137379050254822 4.045695304870605 1.390117287635803 C 3.449177026748657 1.642855763435364 2.911653995513916 2.008488416671753 2.460076093673706 2.460066556930542 C 2.008498191833496 2.911644458770752 1.642865538597107 3.449167490005493 1.390127062797546 4.0456862449646 C 1.137388825416565 4.642204761505127 0.9975449442863464 5.297718524932861 0.9975449442863464 5.985279083251953 L 0.9975449442863464 292.1678161621094 C 0.9975449442863464 292.8553771972656 1.137388825416565 293.5108947753906 1.390127062797546 294.107421875 C 1.642865538597107 294.7039489746094 2.008498191833496 295.2414245605469 2.460076093673706 295.6930236816406 C 2.911653995513916 296.1446228027344 3.449177026748657 296.5102233886719 4.045695304870605 296.7629699707031 C 4.642213821411133 297.0156860351562 5.297728061676025 297.1555480957031 5.985288619995117 297.1555480957031 L 264.885498046875 297.1555480957031 M 264.885498046875 298.1531066894531 L 5.985288619995117 298.1531066894531 C 5.158896446228027 298.1531066894531 4.37161922454834 297.985595703125 3.6555495262146 297.6827392578125 C 2.939479827880859 297.3798522949219 2.294617176055908 296.9415893554688 1.753053903579712 296.4000549316406 C 1.211490511894226 295.8585205078125 0.7732260227203369 295.2136535644531 0.4703524112701416 294.49755859375 C 0.1674788594245911 293.781494140625 -3.821739028353477e-06 292.9942016601562 -3.821739028353477e-06 292.1678161621094 L -3.821739028353477e-06 5.985279083251953 C -3.821739028353477e-06 5.158886909484863 0.1674788594245911 4.371609687805176 0.4703523814678192 3.655539989471436 C 0.7732259631156921 2.939470291137695 1.211490392684937 2.294607877731323 1.753053903579712 1.753044128417969 C 2.294617176055908 1.211480736732483 2.939479827880859 0.7732162475585938 3.6555495262146 0.4703427255153656 C 4.37161922454834 0.1674691885709763 5.158896446228027 -1.348848945781356e-05 5.985288619995117 -1.348848945781356e-05 L 264.885498046875 -1.348848945781356e-05 C 265.7118835449219 -1.348848945781356e-05 266.4991760253906 0.1674692034721375 267.2152404785156 0.470342755317688 C 267.9313049316406 0.7732163071632385 268.576171875 1.211480855941772 269.1177368164062 1.753044247627258 C 269.6592712402344 2.294607877731323 270.0975341796875 2.939470291137695 270.400390625 3.655539989471436 C 270.7032775878906 4.371609687805176 270.8707885742188 5.158886909484863 270.8707885742188 5.985279083251953 L 270.8707885742188 292.1678161621094 C 270.8707885742188 292.9942016601562 270.7032775878906 293.781494140625 270.400390625 294.49755859375 C 270.0975341796875 295.2136535644531 269.6592712402344 295.8585205078125 269.1177368164062 296.4000549316406 C 268.576171875 296.9415893554688 267.9313049316406 297.3798522949219 267.2152404785156 297.6827392578125 C 266.4991760253906 297.985595703125 265.7118835449219 298.1531066894531 264.885498046875 298.1531066894531 Z" stroke="none" fill="rgba(193,193,193,0.35)"/>
  </g>
  <path id="Scenes-2" data-name="Scenes" d="M4.712,13.22q-1.176,0-2.042-.355t-1.36-1Q.815,11.222.754,10.35l-.007-.106H2.734l.007.065q.041.368.3.646t.7.435q.443.157,1.016.157.552,0,.968-.164t.651-.455q.235-.292.235-.667v-.007q0-.484-.392-.777T4.917,9l-1.04-.211q-1.531-.314-2.228-1.03t-.7-1.838V5.91q0-.914.486-1.6t1.328-1.06q.846-.378,1.937-.378,1.149,0,1.971.372T7.956,4.265q.462.646.527,1.471l.007.085H6.55L6.536,5.74q-.058-.355-.295-.621T5.612,4.7q-.392-.153-.91-.15T3.817,4.7q-.38.148-.593.418t-.213.641v.007q0,.477.385.779t1.255.479l1.04.215q1.043.211,1.7.573t.972.907q.314.546.314,1.313v.007q0,.975-.479,1.689t-1.369,1.1Q5.94,13.22,4.712,13.22Zm8.868-.092q-1.173,0-1.995-.46T10.333,11.33Q9.9,10.452,9.9,9.2V9.19q0-1.238.43-2.105t1.251-1.326Q12.4,5.3,13.577,5.3q1,0,1.713.341t1.134.96q.416.619.5,1.458l0,.02H15.077l-.007-.014q-.1-.546-.472-.875t-1.011-.329q-.535,0-.905.269t-.563.788q-.193.518-.193,1.272V9.2q0,.76.194,1.289t.564.8q.37.273.9.273.614,0,.98-.288t.5-.858l.014-.02,1.845-.007,0,.044q-.106.815-.523,1.42T15.27,12.8Q14.562,13.128,13.58,13.128Zm8.047,0q-1.142,0-1.964-.474T18.4,11.306q-.443-.875-.443-2.078V9.221q0-1.2.442-2.076t1.248-1.362q.806-.482,1.9-.482t1.892.469q.8.469,1.229,1.316T25.1,9.071v.617H18.951V8.44H24.14l-.934,1.18V8.825q0-.675-.206-1.127t-.571-.68q-.365-.228-.849-.228t-.852.235q-.372.235-.585.69t-.213,1.11v.8q0,.634.21,1.084t.6.689q.39.239.929.239.436,0,.743-.128t.494-.3q.188-.176.256-.315l.02-.041,1.855,0-.017.072q-.085.351-.319.736t-.639.719q-.406.334-1.009.544T21.627,13.128Zm4.94-.16V5.46h1.991V6.619h.123q.259-.61.8-.965t1.35-.355q1.255,0,1.911.733t.656,2.08v4.855H31.413v-4.4q0-.8-.334-1.207t-1.04-.409q-.46,0-.791.208t-.51.583q-.179.375-.179.886v4.34Zm11.91.16q-1.142,0-1.964-.474t-1.265-1.348q-.443-.875-.443-2.078V9.221q0-1.2.442-2.076t1.248-1.362Q37.3,5.3,38.4,5.3t1.892.469q.8.469,1.229,1.316t.431,1.986v.617H35.8V8.44H40.99l-.934,1.18V8.825q0-.675-.206-1.127t-.571-.68q-.365-.228-.849-.228t-.852.235q-.372.235-.585.69t-.213,1.11v.8q0,.634.21,1.084t.6.689q.39.239.929.239.436,0,.743-.128t.494-.3q.188-.176.256-.315l.02-.041,1.855,0-.017.072q-.085.351-.319.736t-.639.719q-.406.334-1.009.544T38.477,13.128Zm7.924,0q-1.019,0-1.739-.283t-1.125-.781q-.406-.5-.477-1.139l0-.031h1.957l.01.027q.123.348.467.573t.931.225q.385,0,.672-.1t.448-.288q.162-.184.162-.433v-.01q0-.3-.245-.5t-.818-.324l-1.251-.266q-.716-.153-1.193-.442t-.713-.713q-.235-.424-.235-.984V7.649q0-.709.39-1.236t1.1-.82q.706-.293,1.64-.293.985,0,1.674.295t1.06.791q.372.5.413,1.1v.024H47.669l-.007-.031q-.078-.307-.406-.542T46.37,6.7q-.344,0-.61.1t-.418.285q-.152.184-.152.436v.01q0,.2.1.346t.334.259q.232.111.617.2l1.248.266q1.129.242,1.666.733t.537,1.323v.01q0,.74-.423,1.294t-1.164.858Q47.366,13.128,46.4,13.128Z" transform="translate(9.365 11.3)" fill="#fff"/>
  <g id="Group_10" data-name="Group 10" transform="translate(11.377 277.514)">
    <g id="Line_38" data-name="Line 38" transform="translate(3.98)" fill="none" strokeLinecap="round">
      <path d="M.748.748V8.71" stroke="none"/>
      <path d="M 0.7481615543365479 9.457840919494629 C 0.6448628902435303 9.457840919494629 0.5464534759521484 9.436905860900879 0.4569448232650757 9.399046897888184 C 0.3674361705780029 9.361188888549805 0.2868283092975616 9.30640697479248 0.2191327810287476 9.238711357116699 C 0.1514372676610947 9.171016693115234 0.09665407985448837 9.090409278869629 0.05879474431276321 9.000900268554688 C 0.02093547023832798 8.911391258239746 0 8.812980651855469 0 8.709678649902344 L 0 0.7481629848480225 C 0 0.6448618769645691 0.02093547023832798 0.546451210975647 0.05879474431276321 0.456942081451416 C 0.09665407985448837 0.3674329519271851 0.1514372676610947 0.28682541847229 0.2191327810287476 0.2191305160522461 C 0.2868283092975616 0.1514356136322021 0.3674361705780029 0.09665330499410629 0.4569448232650757 0.05879474431276321 C 0.5464534759521484 0.02093624323606491 0.6448628902435303 1.427004917786689e-06 0.7481615543365479 1.427004917786689e-06 C 0.8514602780342102 1.427004917786689e-06 0.949869692325592 0.02093624323606491 1.03937828540802 0.05879474431276321 C 1.128886938095093 0.09665330499410629 1.209494829177856 0.1514356136322021 1.277190327644348 0.2191305160522461 C 1.34488582611084 0.28682541847229 1.399669051170349 0.3674329519271851 1.437528371810913 0.456942081451416 C 1.475387692451477 0.546451210975647 1.496323108673096 0.6448618769645691 1.496323108673096 0.7481629848480225 L 1.496323108673096 8.709678649902344 C 1.496323108673096 8.812980651855469 1.475387692451477 8.911391258239746 1.437528371810913 9.000900268554688 C 1.399669051170349 9.090409278869629 1.34488582611084 9.171016693115234 1.277190327644348 9.238711357116699 C 1.209494829177856 9.30640697479248 1.128886938095093 9.361188888549805 1.03937828540802 9.399046897888184 C 0.949869692325592 9.436905860900879 0.8514602780342102 9.457840919494629 0.7481615543365479 9.457840919494629 Z" stroke="none" fill="#bfb3b1"/>
    </g>
    <g id="Line_39" data-name="Line 39" transform="translate(0 3.981)" fill="none" strokeLinecap="round">
      <path d="M8.709.748H.748" stroke="none"/>
      <path d="M -0.0005936340312473476 0.7481615543365479 C -0.0005936340312473476 0.6448628902435303 0.02034148015081882 0.5464534759521484 0.0581999197602272 0.4569448232650757 C 0.09605836123228073 0.3674361705780029 0.1508401334285736 0.2868283092975616 0.2185353487730026 0.2191327810287476 C 0.2862305641174316 0.1514372676610947 0.3668382465839386 0.09665407985448837 0.4563466608524323 0.05879474431276321 C 0.5458560585975647 0.02093547023832798 0.6442670226097107 0 0.7475684285163879 0 L 8.709064483642578 0 C 8.812366485595703 0 8.910776138305664 0.02093547023832798 9.000286102294922 0.05879474431276321 C 9.089795112609863 0.09665407985448837 9.170401573181152 0.1514372676610947 9.238097190856934 0.2191327810287476 C 9.305791854858398 0.2868283092975616 9.360573768615723 0.3674361705780029 9.398433685302734 0.4569448232650757 C 9.436291694641113 0.5464534759521484 9.457225799560547 0.6448628902435303 9.457225799560547 0.7481615543365479 C 9.457225799560547 0.8514602780342102 9.436291694641113 0.949869692325592 9.398433685302734 1.03937828540802 C 9.360573768615723 1.128886938095093 9.305791854858398 1.209494829177856 9.238097190856934 1.277190327644348 C 9.170401573181152 1.34488582611084 9.089795112609863 1.399669051170349 9.000286102294922 1.437528371810913 C 8.910776138305664 1.475387692451477 8.812366485595703 1.496323108673096 8.709064483642578 1.496323108673096 L 0.7475684285163879 1.496323108673096 C 0.6442670226097107 1.496323108673096 0.5458560585975647 1.475387692451477 0.4563466608524323 1.437528371810913 C 0.3668382465839386 1.399669051170349 0.2862305641174316 1.34488582611084 0.2185353487730026 1.277190327644348 C 0.1508401334285736 1.209494829177856 0.09605836123228073 1.128886938095093 0.0581999197602272 1.03937828540802 C 0.02034148015081882 0.949869692325592 -0.0005936340312473476 0.8514602780342102 -0.0005936340312473476 0.7481615543365479 Z" stroke="none" fill="#bfb3b1"/>
    </g>
  </g>
  <g id="Line_2" data-name="Line 2" transform="translate(45.658 281.495)" fill="none" strokeLinecap="round">
    <path d="M8.709.748H.748" stroke="none"/>
    <path d="M -0.0005936340312473476 0.7481615543365479 C -0.0005936340312473476 0.6448628902435303 0.02034148015081882 0.5464534759521484 0.0581999197602272 0.4569448232650757 C 0.09605836123228073 0.3674361705780029 0.1508401334285736 0.2868283092975616 0.2185353487730026 0.2191327810287476 C 0.2862305641174316 0.1514372676610947 0.3668382465839386 0.09665407985448837 0.4563466608524323 0.05879474431276321 C 0.5458560585975647 0.02093547023832798 0.6442670226097107 0 0.7475684285163879 0 L 8.709064483642578 0 C 8.812366485595703 0 8.910776138305664 0.02093547023832798 9.000286102294922 0.05879474431276321 C 9.089795112609863 0.09665407985448837 9.170401573181152 0.1514372676610947 9.238097190856934 0.2191327810287476 C 9.305791854858398 0.2868283092975616 9.360573768615723 0.3674361705780029 9.398433685302734 0.4569448232650757 C 9.436291694641113 0.5464534759521484 9.457225799560547 0.6448628902435303 9.457225799560547 0.7481615543365479 C 9.457225799560547 0.8514602780342102 9.436291694641113 0.949869692325592 9.398433685302734 1.03937828540802 C 9.360573768615723 1.128886938095093 9.305791854858398 1.209494829177856 9.238097190856934 1.277190327644348 C 9.170401573181152 1.34488582611084 9.089795112609863 1.399669051170349 9.000286102294922 1.437528371810913 C 8.910776138305664 1.475387692451477 8.812366485595703 1.496323108673096 8.709064483642578 1.496323108673096 L 0.7475684285163879 1.496323108673096 C 0.6442670226097107 1.496323108673096 0.5458560585975647 1.475387692451477 0.4563466608524323 1.437528371810913 C 0.3668382465839386 1.399669051170349 0.2862305641174316 1.34488582611084 0.2185353487730026 1.277190327644348 C 0.1508401334285736 1.209494829177856 0.09605836123228073 1.128886938095093 0.0581999197602272 1.03937828540802 C 0.02034148015081882 0.949869692325592 -0.0005936340312473476 0.8514602780342102 -0.0005936340312473476 0.7481615543365479 Z" stroke="none" fill="#bfb3b1"/>
  </g>
  <g id="Line_3" data-name="Line 3" transform="translate(33.246 274.711)" fill="none">
    <path d="M.5,0V15.278" stroke="none"/>
    <path d="M 0.9975487589836121 15.27789306640625 L 0 15.27789306640625 L 0 4.831877049582545e-06 L 0.9975487589836121 4.831877049582545e-06 L 0.9975487589836121 15.27789306640625 Z" stroke="none" fill="rgba(193,193,193,0.35)"/>
  </g>
  <g id="Line_4" data-name="Line 4" transform="translate(9.365 38.52)" fill="none">
    <path d="M0,.5H251.856" stroke="none"/>
    <path d="M 251.8557434082031 0.9975487589836121 L -7.793350050633308e-06 0.9975487589836121 L -7.793350050633308e-06 0 L 251.8557434082031 0 L 251.8557434082031 0.9975487589836121 Z" stroke="none" fill="rgba(193,193,193,0.35)"/>
  </g>
  <g id="Line_5" data-name="Line 5" transform="translate(0.002 266.282)" fill="none">
    <path d="M0,.5H270.2" stroke="none"/>
    <path d="M 270.1973876953125 0.9975487589836121 L -2.597783122837427e-06 0.9975487589836121 L -2.597783122837427e-06 0 L 270.1973876953125 0 L 270.1973876953125 0.9975487589836121 Z" stroke="none" fill="rgba(193,193,193,0.35)"/>
  </g>
  <g id="Group_41" data-name="Group 41" transform="translate(9.363 48.88)">
    <path id="Rectangle_15" data-name="Rectangle 15" d="M5.985,0H245.87a5.98,5.98,0,0,1,5.985,5.985V32.919A5.98,5.98,0,0,1,245.87,38.9H5.985A5.98,5.98,0,0,1,0,32.919V5.985A5.98,5.98,0,0,1,5.985,0Z" transform="translate(0.002)" fill="#507be1"/>
    <g id="square.3.layers.3d" transform="translate(8.955 8.42)">
      <path id="Rectangle_88" data-name="Rectangle 88" d="M0,0H20.272V22.065H0Z" fill="#fff" opacity="0"/>
      <path id="Path_88" data-name="Path 88" d="M18.811.9a4.944,4.944,0,0,1,.5.329,2.042,2.042,0,0,1,.341.317,1.1,1.1,0,0,1,.193.33,1.067,1.067,0,0,1,.061.368,1.1,1.1,0,0,1-.061.373,1.107,1.107,0,0,1-.193.333,2.026,2.026,0,0,1-.341.318,4.916,4.916,0,0,1-.5.329L11.193,8.016c-.117.068-.228.127-.336.177a2.736,2.736,0,0,1-.312.124,2.027,2.027,0,0,1-.3.073,1.785,1.785,0,0,1-.292.024,1.817,1.817,0,0,1-.3-.024,1.989,1.989,0,0,1-.3-.073,2.7,2.7,0,0,1-.31-.124c-.107-.05-.218-.109-.334-.177L1.091,3.594a4.783,4.783,0,0,1-.5-.329A1.983,1.983,0,0,1,.25,2.946a1.1,1.1,0,0,1-.19-.333A1.117,1.117,0,0,1,0,2.24a1.046,1.046,0,0,1,.25-.7,2,2,0,0,1,.338-.317A4.81,4.81,0,0,1,1.091.9L2.635,0l1.6.93L2.1,2.152a.184.184,0,0,0-.027.016.125.125,0,0,0-.022.02.087.087,0,0,0-.014.024.074.074,0,0,0-.005.027.1.1,0,0,0,.005.033.092.092,0,0,0,.014.027.114.114,0,0,0,.022.021.171.171,0,0,0,.027.017L9.518,6.584c.041.022.081.041.119.058a1.135,1.135,0,0,0,.111.043.768.768,0,0,0,.105.026.592.592,0,0,0,.205,0,.739.739,0,0,0,.1-.026,1.025,1.025,0,0,0,.108-.043c.037-.017.075-.036.114-.058L17.8,2.337a.187.187,0,0,0,.033-.017.111.111,0,0,0,.025-.021.085.085,0,0,0,.015-.027.1.1,0,0,0,.005-.033.071.071,0,0,0-.005-.027.08.08,0,0,0-.015-.024.121.121,0,0,0-.025-.02.2.2,0,0,0-.033-.016L15.668.932,17.269,0Z" transform="translate(0 13.649)" fill="#fff"/>
      <path id="Path_89" data-name="Path 89" d="M18.811,1.763a5.243,5.243,0,0,1,.5.334,2.07,2.07,0,0,1,.341.318,1.1,1.1,0,0,1,.193.331,1.077,1.077,0,0,1-.193,1.073,2.03,2.03,0,0,1-.341.315,5.085,5.085,0,0,1-.5.328L11.193,8.894c-.117.068-.228.127-.336.177a2.738,2.738,0,0,1-.312.125,2.027,2.027,0,0,1-.3.073,1.784,1.784,0,0,1-.292.024,1.816,1.816,0,0,1-.3-.024,1.988,1.988,0,0,1-.3-.073,2.7,2.7,0,0,1-.31-.125c-.107-.05-.218-.109-.334-.177L1.091,4.461a4.944,4.944,0,0,1-.5-.328A1.987,1.987,0,0,1,.25,3.819a1.082,1.082,0,0,1-.19-.33,1.191,1.191,0,0,1,0-.744,1.092,1.092,0,0,1,.19-.331A2.025,2.025,0,0,1,.588,2.1a5.094,5.094,0,0,1,.5-.334L2.9.716,4.5,1.648,2.1,3.02a.171.171,0,0,0-.027.017.114.114,0,0,0-.022.021.092.092,0,0,0-.014.027.1.1,0,0,0-.005.033.091.091,0,0,0,.005.032.081.081,0,0,0,.014.024.156.156,0,0,0,.022.021l.027.021L9.518,7.452c.041.022.081.041.119.058a1.136,1.136,0,0,0,.111.043.768.768,0,0,0,.105.026.591.591,0,0,0,.205,0,.739.739,0,0,0,.1-.026,1.026,1.026,0,0,0,.108-.043c.037-.017.075-.036.114-.058L17.8,3.215l.033-.021a.147.147,0,0,0,.025-.021.076.076,0,0,0,.015-.024.087.087,0,0,0,.005-.032.1.1,0,0,0-.005-.033.085.085,0,0,0-.015-.027.111.111,0,0,0-.025-.021A.187.187,0,0,0,17.8,3.02L15.4,1.649,17.007.716ZM6.13.718h0L4.876,0Zm7.642,0h0l.752-.431Z" transform="translate(0 8.29)" fill="#fff"/>
      <path id="Path_90" data-name="Path 90" d="M9.956,12.343a1.784,1.784,0,0,0,.292-.024,2.026,2.026,0,0,0,.3-.073,2.738,2.738,0,0,0,.312-.125c.107-.05.219-.109.336-.177l7.618-4.423a4.917,4.917,0,0,0,.5-.329,2.026,2.026,0,0,0,.341-.318,1.107,1.107,0,0,0,.193-.333,1.1,1.1,0,0,0,.061-.373,1.067,1.067,0,0,0-.061-.368,1.1,1.1,0,0,0-.193-.33,2.042,2.042,0,0,0-.341-.317,4.943,4.943,0,0,0-.5-.329L11.193.4c-.117-.068-.228-.127-.336-.177A2.737,2.737,0,0,0,10.545.1a2.026,2.026,0,0,0-.3-.073A1.785,1.785,0,0,0,9.956,0a1.817,1.817,0,0,0-.3.024,1.988,1.988,0,0,0-.3.073,2.7,2.7,0,0,0-.31.125c-.107.05-.218.109-.334.177L1.091,4.822a4.809,4.809,0,0,0-.5.329,2,2,0,0,0-.338.317,1.046,1.046,0,0,0-.25.7,1.117,1.117,0,0,0,.06.373,1.1,1.1,0,0,0,.19.333,1.983,1.983,0,0,0,.338.318,4.784,4.784,0,0,0,.5.329l7.628,4.423c.117.068.228.127.334.177a2.7,2.7,0,0,0,.31.125,1.988,1.988,0,0,0,.3.073A1.816,1.816,0,0,0,9.956,12.343Zm0-1.7a.6.6,0,0,1-.1-.009.768.768,0,0,1-.105-.026,1.135,1.135,0,0,1-.111-.043c-.038-.017-.078-.036-.119-.058L2.1,6.264a.172.172,0,0,1-.027-.017.114.114,0,0,1-.022-.021A.092.092,0,0,1,2.041,6.2a.1.1,0,0,1-.005-.033.074.074,0,0,1,.005-.027.087.087,0,0,1,.014-.024.124.124,0,0,1,.022-.02A.183.183,0,0,1,2.1,6.079L9.518,1.831c.041-.022.081-.041.119-.058a1.136,1.136,0,0,1,.111-.043A.768.768,0,0,1,9.853,1.7a.591.591,0,0,1,.205,0,.739.739,0,0,1,.1.026,1.026,1.026,0,0,1,.108.043c.037.017.075.036.114.058L17.8,6.079a.2.2,0,0,1,.033.016.121.121,0,0,1,.025.02.08.08,0,0,1,.015.024.071.071,0,0,1,.005.027.1.1,0,0,1-.005.033.085.085,0,0,1-.015.027.111.111,0,0,1-.025.021.188.188,0,0,1-.033.017l-7.413,4.247c-.039.022-.077.041-.114.058a1.025,1.025,0,0,1-.108.043.739.739,0,0,1-.1.026A.6.6,0,0,1,9.956,10.648Z" transform="translate(0 0.438)" fill="#fff"/>
    </g>
    <path id="Scene_1" data-name="Scene 1" d="M4.26,12.253q-1.039,0-1.809-.329T1.236,11.01Q.791,10.425.725,9.655L.719,9.574H2.125l.006.067q.042.416.327.723t.765.477q.48.171,1.1.171.584,0,1.035-.183t.708-.508q.258-.325.258-.748V9.565q0-.528-.4-.877T4.6,8.144l-1-.213q-1.4-.3-2.034-.951T.934,5.313V5.307q.005-.8.43-1.4T2.54,2.963q.751-.339,1.725-.339t1.7.335q.728.335,1.151.906T7.59,5.154L7.6,5.24H6.207l-.013-.08q-.06-.379-.31-.67t-.667-.46q-.416-.169-.972-.164-.535,0-.956.164T2.624,4.5q-.244.3-.244.737V5.24q0,.51.39.851t1.28.531l1,.219q.966.205,1.561.543t.875.832q.279.495.279,1.177V9.4q0,.878-.43,1.517T6.117,11.9Q5.329,12.253,4.26,12.253Zm8.051-.092q-1.01,0-1.738-.436T9.451,10.482q-.393-.808-.393-1.924V8.545q0-1.1.391-1.9t1.119-1.23q.728-.433,1.738-.433.869,0,1.5.3t1,.826q.372.524.467,1.2l0,.031h-1.33l-.006-.017q-.114-.509-.528-.847t-1.1-.338q-.574,0-.987.29t-.634.828q-.221.538-.221,1.287v.013q0,.76.224,1.309t.636.844q.413.295.982.295.649,0,1.053-.288t.569-.845l.013-.031,1.324-.006-.009.06q-.125.67-.493,1.181t-.981.8Q13.171,12.161,12.311,12.161Zm7.343,0q-1.011,0-1.738-.436T16.8,10.488q-.391-.8-.391-1.894V8.587q0-1.082.391-1.891T17.9,5.436q.715-.451,1.678-.451t1.665.434q.7.434,1.073,1.214T22.7,8.451v.485H17.11V7.949h4.9l-.666.916v-.55q0-.743-.224-1.228T20.5,6.361q-.395-.241-.911-.241t-.918.252q-.4.252-.637.742t-.234,1.2v.552q0,.68.229,1.163t.653.739q.424.257,1,.257.444,0,.766-.124t.528-.309q.205-.185.285-.362l.023-.05h1.336l-.014.057q-.086.342-.309.681t-.587.621q-.364.282-.879.452T19.654,12.161Zm4.607-.131V5.116h1.383v1.05h.106Q26,5.61,26.5,5.3t1.252-.313q1.163,0,1.78.668t.617,1.9V12.03H28.768V7.88q0-.861-.362-1.285T27.282,6.17q-.5,0-.871.22t-.567.623q-.2.4-.2.96V12.03Zm10.639.131q-1.011,0-1.738-.436t-1.118-1.237q-.391-.8-.391-1.894V8.587q0-1.082.391-1.891t1.106-1.26q.715-.451,1.678-.451t1.665.434q.7.434,1.073,1.214t.375,1.818v.485H32.356V7.949h4.9l-.666.916v-.55q0-.743-.224-1.228t-.619-.726q-.395-.241-.911-.241t-.918.252q-.4.252-.637.742t-.234,1.2v.552q0,.68.229,1.163t.653.739q.424.257,1,.257.444,0,.766-.124t.528-.309q.205-.185.285-.362l.023-.05h1.336l-.014.057q-.086.342-.309.681t-.587.621q-.364.282-.879.452T34.9,12.161Zm10.326-.131V4.32H45.12L42.814,5.965v-1.4l2.418-1.717h1.425V12.03Z" transform="translate(37.348 11.186)" fill="#fff"/>
  </g>
</svg>

)



const SourcesSvg = () => (
	<svg id="sources-svg" xmlns="http://www.w3.org/2000/svg" width="271.537" height="298.886" viewBox="0 0 271.537 298.886">
  <g id="Scenes" transform="translate(-14847.638 -185.172)">
    <g id="Rectangle_90" data-name="Rectangle 90" transform="translate(14847.639 185.172)" fill="rgba(56,44,42,0.5)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="271.536" height="298.886" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="270.536" height="297.886" rx="5.5" fill="none"/>
    </g>
    <text id="Scenes-2" data-name="Scenes" transform="translate(14857.025 209.5)" fill="#fff" fontSize="14" fontFamily="SF Pro" fontWeight="700"><tspan x="0" y="0">Sources</tspan></text>
    <g id="Group_29" data-name="Group 29" transform="translate(14859.793 464.119)">
      <line id="Line_38" data-name="Line 38" y2="7.981" transform="translate(3.991)" fill="none" stroke="#bfb3b1" strokeLinecap="round" strokeWidth="1.5"/>
      <line id="Line_39" data-name="Line 39" y2="7.981" transform="translate(7.981 3.991) rotate(90)" fill="none" stroke="#bfb3b1" strokeLinecap="round" strokeWidth="1.5"/>
    </g>
    <line id="Line_46" data-name="Line 46" y2="7.981" transform="translate(14902.139 468.109) rotate(90)" fill="none" stroke="#bfb3b1" strokeLinecap="round" strokeWidth="1.5"/>
    <line id="Line_47" data-name="Line 47" y2="15.315" transform="translate(14881.466 460.558)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <line id="Line_49" data-name="Line 49" x2="252.475" transform="translate(14857.025 224.287)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <line id="Line_48" data-name="Line 48" x2="270.861" transform="translate(14847.639 452.609)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <rect id="Rectangle_89" data-name="Rectangle 89" width="252.475" height="39" rx="6" transform="translate(14857.025 234.33)" fill="#fff" opacity="0.13"/>
    <text id="Screen_Capture_Source" data-name="Screen Capture Source" transform="translate(14899.148 251.787)" fill="#fff" fontSize="13" fontFamily="SF Pro" fontWeight="500" letterSpacing="-0.02em"><tspan x="0" y="0">Screen Capture Source</tspan></text>
    <text id="Screen_Capture_Source-2" data-name="Screen Capture Source" transform="translate(14899 266)" fill="rgba(255,255,255,0.67)" fontSize="12" fontFamily="SF Pro" letterSpacing="-0.01em"><tspan x="0" y="0">Screen Capture Source</tspan></text>
    <g id="Group_40" data-name="Group 40">
      <path id="Path_81" data-name="Path 81" d="M14.407,28.813A14.513,14.513,0,0,0,28.813,14.407,14.516,14.516,0,0,0,14.393,0,14.5,14.5,0,0,0,0,14.407,14.523,14.523,0,0,0,14.407,28.813Z" transform="translate(14863.304 239.405)" fill="#3677f9"/>
      <g id="rectangle.inset.filled.badge.record" transform="translate(14866.784 245.91)">
        <rect id="Rectangle_92" data-name="Rectangle 92" width="21.852" height="15.803" fill="#eaf1fe" opacity="0"/>
        <path id="Path_91" data-name="Path 91" d="M20.082,5.157V8.8a3.466,3.466,0,0,0-.507-.035,3.427,3.427,0,0,0-.513.037V5.214a.891.891,0,0,0-.982-1H7.148a.888.888,0,0,0-.982,1V12.84a.884.884,0,0,0,.982.994h8.476a3.758,3.758,0,0,0,.409,1.02h-8.9A1.745,1.745,0,0,1,5.146,12.9V5.157A1.749,1.749,0,0,1,7.135,3.193H18.093A1.747,1.747,0,0,1,20.082,5.157Z" transform="translate(-1.808 -1.122)" fill="#eaf1fe"/>
        <path id="Path_92" data-name="Path 92" d="M19.223,6.674V10.03a4.1,4.1,0,0,0-2.7,3.832.971.971,0,0,0,.007.133H8.608a.509.509,0,0,1-.551-.57V6.674a.509.509,0,0,1,.551-.57H18.666A.514.514,0,0,1,19.223,6.674Z" transform="translate(-2.831 -2.145)" fill="#eaf1fe"/>
        <path id="Path_93" data-name="Path 93" d="M25.649,19.541a3.218,3.218,0,1,0-3.218-3.218A3.239,3.239,0,0,0,25.649,19.541Zm0-.76a2.458,2.458,0,1,1,2.458-2.458A2.446,2.446,0,0,1,25.649,18.781Zm-.006-.551a1.9,1.9,0,1,0-1.9-1.9A1.911,1.911,0,0,0,25.643,18.23Z" transform="translate(-7.882 -4.605)" fill="#eaf1fe"/>
      </g>
    </g>
  </g>
</svg>

)





const StreamSvg = () => (
	<svg id='stream-svg' xmlns="http://www.w3.org/2000/svg" width="272.537" height="100.886" viewBox="0 0 272.537 100.886">
  <g id="Controls" transform="translate(-15732.233 140.201)">
    <g id="Rectangle_93" data-name="Rectangle 93" transform="translate(15732.232 -140.201)" fill="rgba(56,44,42,0.5)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="272.536" height="100.886" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="271.536" height="99.886" rx="5.5" fill="none"/>
    </g>
    <text id="Controls-2" data-name="Controls" transform="translate(15741.619 -115.874)" fill="#fff" fontSize="14" fontFamily="SF Pro" fontWeight="700"><tspan x="0" y="0">Controls</tspan></text>
    <line id="Line_50" data-name="Line 50" x2="252.475" transform="translate(15741.764 -101.087)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <g id="Rectangle_94" data-name="Rectangle 94" transform="translate(15742.264 -91.3)" fill="rgba(255,255,255,0.11)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="252.475" height="42" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="251.475" height="41" rx="5.5" fill="none"/>
    </g>
    <g id="video.slash.circle.fill" transform="translate(15751.103 -84.818)">
      <rect id="Rectangle_95" data-name="Rectangle 95" width="27.512" height="27.035" fill="#fff" opacity="0"/>
      <path id="Path_94" data-name="Path 94" d="M27.022,13.521A13.6,13.6,0,0,1,13.511,27.031,13.611,13.611,0,0,1,0,13.521,13.608,13.608,0,0,1,13.5.01,13.622,13.622,0,0,1,27.022,13.521ZM6.477,6.474a.623.623,0,0,0,0,.874L19.7,20.567a.65.65,0,0,0,.874,0,.623.623,0,0,0,0-.874L7.352,6.474A.624.624,0,0,0,6.477,6.474Zm-.834,3.7V16.9a1.975,1.975,0,0,0,2.172,2.133h7.219A2.319,2.319,0,0,0,16.4,18.65L6.291,8.539A2.089,2.089,0,0,0,5.643,10.169Zm14.994-.782-2.676,2.278v3.722l2.676,2.278a1.2,1.2,0,0,0,.755.331.855.855,0,0,0,.861-.954V10.01a.851.851,0,0,0-.861-.94A1.191,1.191,0,0,0,20.637,9.388ZM10.268,8.024l6.925,6.918V10.169A1.908,1.908,0,0,0,15.1,8.024Z" transform="translate(0 0.003)" fill="#fff"/>
    </g>
    <text id="Virtual_Camera" data-name="Virtual Camera" transform="translate(15787.639 -66.8)" fill="#fff" fontSize="12" fontFamily="SF Pro" fontWeight="700" letterSpacing="-0.015em"><tspan x="0" y="0">Virtual Camera</tspan></text>
  </g>
</svg>
)


const RecordSvg = () => (
	<svg id='record-svg' xmlns="http://www.w3.org/2000/svg" width="272.537" height="100.886" viewBox="0 0 272.537 100.886">
  <g id="Controls" transform="translate(-15732.233 140.201)">
    <g id="Rectangle_93" data-name="Rectangle 93" transform="translate(15732.232 -140.201)" fill="rgba(56,44,42,0.5)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="272.536" height="100.886" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="271.536" height="99.886" rx="5.5" fill="none"/>
    </g>
    <text id="Controls-2" data-name="Controls" transform="translate(15741.619 -115.874)" fill="#fff" fontSize="14" fontFamily="SF Pro" fontWeight="700"><tspan x="0" y="0">Controls</tspan></text>
    <line id="Line_50" data-name="Line 50" x2="252.475" transform="translate(15741.764 -101.087)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <g id="Rectangle_94" data-name="Rectangle 94" transform="translate(15742.264 -91.3)" fill="rgba(255,255,255,0.11)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="252.475" height="42" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="251.475" height="41" rx="5.5" fill="none"/>
    </g>
    <g id="video.slash.circle.fill" transform="translate(15751.103 -84.818)">
      <rect id="Rectangle_95" data-name="Rectangle 95" width="27.512" height="27.035" fill="#fff" opacity="0"/>
      <path id="Path_94" data-name="Path 94" d="M27.022,13.521A13.6,13.6,0,0,1,13.511,27.031,13.611,13.611,0,0,1,0,13.521,13.608,13.608,0,0,1,13.5.01,13.622,13.622,0,0,1,27.022,13.521ZM6.477,6.474a.623.623,0,0,0,0,.874L19.7,20.567a.65.65,0,0,0,.874,0,.623.623,0,0,0,0-.874L7.352,6.474A.624.624,0,0,0,6.477,6.474Zm-.834,3.7V16.9a1.975,1.975,0,0,0,2.172,2.133h7.219A2.319,2.319,0,0,0,16.4,18.65L6.291,8.539A2.089,2.089,0,0,0,5.643,10.169Zm14.994-.782-2.676,2.278v3.722l2.676,2.278a1.2,1.2,0,0,0,.755.331.855.855,0,0,0,.861-.954V10.01a.851.851,0,0,0-.861-.94A1.191,1.191,0,0,0,20.637,9.388ZM10.268,8.024l6.925,6.918V10.169A1.908,1.908,0,0,0,15.1,8.024Z" transform="translate(0 0.003)" fill="#fff"/>
    </g>
    <text id="Virtual_Camera" data-name="Virtual Camera" transform="translate(15787.639 -66.8)" fill="#fff" fontSize="12" fontFamily="SF Pro" fontWeight="700" letterSpacing="-0.015em"><tspan x="0" y="0">Virtual Camera</tspan></text>
  </g>
</svg>
)


const VirtualCameraSvg = () => (
	<svg id='virtual-camera-svg' xmlns="http://www.w3.org/2000/svg" width="272.537" height="100.886" viewBox="0 0 272.537 100.886">
  <g id="Controls" transform="translate(-15732.233 140.201)">
    <g id="Rectangle_93" data-name="Rectangle 93" transform="translate(15732.232 -140.201)" fill="rgba(56,44,42,0.5)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="272.536" height="100.886" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="271.536" height="99.886" rx="5.5" fill="none"/>
    </g>
    <text id="Controls-2" data-name="Controls" transform="translate(15741.619 -115.874)" fill="#fff" fontSize="14" fontFamily="SF Pro" fontWeight="700"><tspan x="0" y="0">Controls</tspan></text>
    <line id="Line_50" data-name="Line 50" x2="252.475" transform="translate(15741.764 -101.087)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <g id="Rectangle_94" data-name="Rectangle 94" transform="translate(15742.264 -91.3)" fill="rgba(255,255,255,0.11)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="252.475" height="42" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="251.475" height="41" rx="5.5" fill="none"/>
    </g>
    <g id="video.slash.circle.fill" transform="translate(15751.103 -84.818)">
      <rect id="Rectangle_95" data-name="Rectangle 95" width="27.512" height="27.035" fill="#fff" opacity="0"/>
      <path id="Path_94" data-name="Path 94" d="M27.022,13.521A13.6,13.6,0,0,1,13.511,27.031,13.611,13.611,0,0,1,0,13.521,13.608,13.608,0,0,1,13.5.01,13.622,13.622,0,0,1,27.022,13.521ZM6.477,6.474a.623.623,0,0,0,0,.874L19.7,20.567a.65.65,0,0,0,.874,0,.623.623,0,0,0,0-.874L7.352,6.474A.624.624,0,0,0,6.477,6.474Zm-.834,3.7V16.9a1.975,1.975,0,0,0,2.172,2.133h7.219A2.319,2.319,0,0,0,16.4,18.65L6.291,8.539A2.089,2.089,0,0,0,5.643,10.169Zm14.994-.782-2.676,2.278v3.722l2.676,2.278a1.2,1.2,0,0,0,.755.331.855.855,0,0,0,.861-.954V10.01a.851.851,0,0,0-.861-.94A1.191,1.191,0,0,0,20.637,9.388ZM10.268,8.024l6.925,6.918V10.169A1.908,1.908,0,0,0,15.1,8.024Z" transform="translate(0 0.003)" fill="#fff"/>
    </g>
    <text id="Virtual_Camera" data-name="Virtual Camera" transform="translate(15787.639 -66.8)" fill="#fff" fontSize="12" fontFamily="SF Pro" fontWeight="700" letterSpacing="-0.015em"><tspan x="0" y="0">Virtual Camera</tspan></text>
  </g>
</svg>
)

const NativeSvg = () => (
	<svg id='native-svg' xmlns="http://www.w3.org/2000/svg" width="272.537" height="100.886" viewBox="0 0 272.537 100.886">
  <g id="Controls" transform="translate(-15732.233 140.201)">
    <g id="Rectangle_93" data-name="Rectangle 93" transform="translate(15732.232 -140.201)" fill="rgba(56,44,42,0.5)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="272.536" height="100.886" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="271.536" height="99.886" rx="5.5" fill="none"/>
    </g>
    <text id="Controls-2" data-name="Controls" transform="translate(15741.619 -115.874)" fill="#fff" fontSize="14" fontFamily="SF Pro" fontWeight="700"><tspan x="0" y="0">Controls</tspan></text>
    <line id="Line_50" data-name="Line 50" x2="252.475" transform="translate(15741.764 -101.087)" fill="none" stroke="rgba(193,193,193,0.35)" strokeWidth="1"/>
    <g id="Rectangle_94" data-name="Rectangle 94" transform="translate(15742.264 -91.3)" fill="rgba(255,255,255,0.11)" stroke="rgba(193,193,193,0.35)" strokeWidth="1">
      <rect width="252.475" height="42" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="251.475" height="41" rx="5.5" fill="none"/>
    </g>
    <g id="video.slash.circle.fill" transform="translate(15751.103 -84.818)">
      <rect id="Rectangle_95" data-name="Rectangle 95" width="27.512" height="27.035" fill="#fff" opacity="0"/>
      <path id="Path_94" data-name="Path 94" d="M27.022,13.521A13.6,13.6,0,0,1,13.511,27.031,13.611,13.611,0,0,1,0,13.521,13.608,13.608,0,0,1,13.5.01,13.622,13.622,0,0,1,27.022,13.521ZM6.477,6.474a.623.623,0,0,0,0,.874L19.7,20.567a.65.65,0,0,0,.874,0,.623.623,0,0,0,0-.874L7.352,6.474A.624.624,0,0,0,6.477,6.474Zm-.834,3.7V16.9a1.975,1.975,0,0,0,2.172,2.133h7.219A2.319,2.319,0,0,0,16.4,18.65L6.291,8.539A2.089,2.089,0,0,0,5.643,10.169Zm14.994-.782-2.676,2.278v3.722l2.676,2.278a1.2,1.2,0,0,0,.755.331.855.855,0,0,0,.861-.954V10.01a.851.851,0,0,0-.861-.94A1.191,1.191,0,0,0,20.637,9.388ZM10.268,8.024l6.925,6.918V10.169A1.908,1.908,0,0,0,15.1,8.024Z" transform="translate(0 0.003)" fill="#fff"/>
    </g>
    <text id="Virtual_Camera" data-name="Virtual Camera" transform="translate(15787.639 -66.8)" fill="#fff" fontSize="12" fontFamily="SF Pro" fontWeight="700" letterSpacing="-0.015em"><tspan x="0" y="0">Virtual Camera</tspan></text>
  </g>
</svg>
)





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