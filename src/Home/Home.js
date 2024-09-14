// import { Hero } from './Hero/Hero';
import { Features } from './Features/Features';
import { QuickTutorial } from './QuickTutorial/QuickTutorial';
import { Opensource } from './Opensource/Opensource';
// import { Download } from './Download/Download';
import './Home.css'
import React, { useState, useEffect } from 'react';

import tiger from './tiger.jpg'

const Home = () => {

      useEffect(() => {
            setTimeout(() => {
                  startTypingAnimation();
            }, 500)
      }, []);


	return (
		<div id='home'>

            <div id="home-hero">

                  <div id="home-badge">For MacOS 13+</div>
                  <div id="home-subheader">An open-source screen-casting applicaiton built natively for MacOS.</div>

                  <div id="home-header">
                        <div id="home-header-text"></div>
                        <div id="home-header-caret" className='blink'/>
                  </div>


                  <AppSVG />


            </div>

            {/* <img src={tiger} style={{ width: '100%', height: '100%'}}/> */}

            {/* <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p>
            <p style={{ height: '100px' }}>herro prease</p> */}
            {/* <Hero /> */}

            <Features />

            <Opensource />

            <QuickTutorial />


            {/* <Download /> */}

		</div>
	);
}
export { Home }




const AppSVG = () => (
<svg width="378" height="329.373" viewBox="0 0 378 329.373">
  <g id="Group_209" data-name="Group 209" transform="translate(19120 -4136)">
    <g id="Rectangle_280" data-name="Rectangle 280" transform="translate(-19120 4136)" fill="#343434" stroke="#707070" stroke-width="1">
      <rect width="378" height="312" stroke="none"/>
      <rect x="0.5" y="0.5" width="377" height="311" fill="none"/>
    </g>

    <g id="scenes" transform="translate(-33904.594 3981.315) scale(1.1)">
      <g id="Rectangle_90" data-name="Rectangle 90" transform="translate(14847.639 185.172)" fill="rgba(56,44,42,0)" stroke="rgba(193,193,193,0.35)" stroke-width="1">
        <rect width="271.536" height="298.886" rx="6" stroke="none"/>
        <rect x="0.5" y="0.5" width="270.536" height="297.886" rx="5.5" fill="none"/>
      </g>
      <text id="Scenes-2" data-name="Scenes" transform="translate(14857.025 209.5)" fill="#fff" font-size="14" font-family="SF Pro"><tspan x="0" y="0">Scenes</tspan></text>
      <line id="Line_49" data-name="Line 49" x2="252.475" transform="translate(14857.025 224.287)" fill="none" stroke="rgba(193,193,193,0.35)" stroke-width="1"/>
    </g>
  </g>

</svg>


);




async function startTypingAnimation(element) {

      const div = document.querySelector('#home-header-text')
      const caret = document.querySelector('#home-header-caret');

      div.style.fontWeight = 200
      caret.style.opacity = 1
      await sleep(1000);
      caret.classList.remove('blink');
      // Create

      div.innerHTML = "C";
      await sleep(125);

      div.innerHTML = "Cr";
      await sleep(125);

      div.innerHTML = "Cre";
      await sleep(125);

      div.innerHTML = "Crea";
      await sleep(125);

      div.innerHTML = "Creat";
      await sleep(125);

      div.innerHTML = "Create";
      await sleep(200);

      div.innerHTML = "Create.";
      caret.classList.add('blink');
      await sleep(2000);
      caret.classList.remove('blink');


      // Deleting backwards
      div.innerHTML = "Create";
      await sleep(200);

      div.innerHTML = "Creat";
      await sleep(200);

      div.innerHTML = "Crea";
      await sleep(200);

      div.innerHTML = "Cre";
      await sleep(200);

      div.innerHTML = "Cr";
      await sleep(250);

      div.innerHTML = "C";
      await sleep(300);

      div.innerHTML = "";
      caret.classList.add('blink');
      div.style.fontWeight = 400
      await sleep(250);



      // Customize
      div.innerHTML = "C";
      await sleep(150);
      caret.classList.remove('blink');

      div.innerHTML = "Cu";
      await sleep(125);

      div.innerHTML = "Cus";
      await sleep(125);

      div.innerHTML = "Cust";
      await sleep(125);

      div.innerHTML = "Custo";
      await sleep(125);

      div.innerHTML = "Custom";
      await sleep(125);

      div.innerHTML = "Customi";
      await sleep(125);

      div.innerHTML = "Customiz";
      await sleep(125);

      div.innerHTML = "Customize";
      await sleep(200);
      
      div.innerHTML = "Customize.";

      caret.classList.add('blink');
      await sleep(2000);
      caret.classList.remove('blink')

      // Deleting backwards
      div.innerHTML = "Customize";
      await sleep(250);

      div.innerHTML = "Customiz";
      await sleep(250);

      div.innerHTML = "Customi";
      await sleep(250);

      div.innerHTML = "Custom";
      await sleep(250);

      div.innerHTML = "Custo";
      await sleep(250);

      div.innerHTML = "Cust";
      await sleep(250);

      div.innerHTML = "Cus";
      await sleep(250);

      div.innerHTML = "Cu";
      await sleep(300);

      div.innerHTML = "C";
      await sleep(325);


      div.innerHTML = "";
      caret.classList.add('blink');
      div.style.fontWeight = 700
      await sleep(250);



      // Cast
      div.innerHTML = "C";
      await sleep(250);
      caret.classList.remove('blink');

      div.innerHTML = "Ca";
      await sleep(200);

      div.innerHTML = "Cas";
      await sleep(200);
      
      div.innerHTML = "Cast";
      await sleep(200);
      
      div.innerHTML = "Cast.";

      caret.classList.add('blink');
      await sleep(2000);
      caret.classList.remove('blink');

      // Deleting backwards
      div.innerHTML = "Cast";
      await sleep(200);

      div.innerHTML = "Cas";
      await sleep(200);

      div.innerHTML = "Ca";
      await sleep(200);

      div.innerHTML = "C";
      await sleep(200);

      div.innerHTML = "";
      caret.classList.add('blink');
      await sleep(1000);



      startTypingAnimation();
}


function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}





