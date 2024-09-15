import React, { useState, useEffect } from 'react';
import Sketch from './js/app';

import './Hero.css'



const Hero = () => {

    const handlePointerMove = (e) => {
        const svg = document.querySelector('#svg')
        const bounds = svg.getBoundingClientRect()

        const transformX = e.offsetX - (bounds.width * 0.5)
        const transformY = -1 * (e.offsetY - (bounds.height * 0.5))
        // console.log('pointer is moving: ', transformX, transformY)

        const normalizedX = transformX / (bounds.width * 0.5)
        const normalizedY = transformY / (bounds.height * 0.5)


        const rotateX = -1 * (3 * normalizedY)
        const rotateY = -1 * (3 * normalizedX)

        // console.log('rotateX is: ', rotateX)
        console.log('rotateY is: ', rotateY)

        svg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handlePointerEnter = (e) => {
            const svg = document.querySelector('#svg')
            pointerEnterTransition(svg)
    } 


    const handlePointerLeave = (e) => {
            const svg = document.querySelector('#svg')
            svg.style.transition = 'transform 250ms'
            svg.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }


    


    useEffect(() => {
  
        setTimeout(() => {
            startTypingAnimation();
        }, 500)

    }, []);

    return (
        <div id="home-hero">

        <div id="home-badge">For MacOS 13+</div>
        <div id="home-subheader">An open-source screen-casting applicaiton built natively for MacOS.</div>

        <div id="home-header">
              <div id="home-header-text"></div>
              <div id="home-header-caret" className='blink'/>
        </div> 
       


        {/* <AppSVG /> */}

        {/* <div id="home-svg">
              <div id="svg" 
                    onPointerMove={e => handlePointerMove(e.nativeEvent)}
                    onPointerLeave={handlePointerLeave}
                    onPointerEnter={handlePointerEnter}
              >
                    Hello WORLD
              </div>
        </div> */}


  </div>
    )
}

export { Hero }







async function pointerEnterTransition(element) { 
    element.style.transition = 'transform 150ms'
    await sleep(200)
    element.style.removeProperty('transition');
}








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


