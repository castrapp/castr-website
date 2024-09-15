import { useEffect } from 'react'
import './Opensource.css'

const Opensource = () => {


    useEffect(() => {
        setTimeout(() => {
            startTypingAnimation();
      }, 500)
    }, [])

    return (
        <div id='opensource'>
            <span id="opensource-subheader">Available to Everyone.</span>
            <span id="opensource-header">100% Open Source.</span>
            <button className='opensource-button'>View on GitHub</button>
        </div>
    )
}

export { Opensource }








async function startTypingAnimation(element) {

    const div = document.querySelector('#opensource-header')
    // const caret = document.querySelector('#home-header-caret');

    // Typing "100% Open Source"
    div.innerHTML = "100% Open Source";
    await sleep(1250);

    // Deleting down to "100% "
    div.innerHTML = "100% Open Sourc";
    await sleep(125);
    div.innerHTML = "100% Open Sour";
    await sleep(125);
    div.innerHTML = "100% Open Sou";
    await sleep(125);
    div.innerHTML = "100% Open So";
    await sleep(125);
    div.innerHTML = "100% Open S";
    await sleep(125);
    div.innerHTML = "100% Open ";
    await sleep(125);
    div.innerHTML = "100% Ope";
    await sleep(125);
    div.innerHTML = "100% Op";
    await sleep(125);
    div.innerHTML = "100% O";
    await sleep(125);
    div.innerHTML = "100% ";
    await sleep(500); // Pause at "100% "

    // Typing "100% Free"
    div.innerHTML = "100% F";
    await sleep(125);
    div.innerHTML = "100% Fr";
    await sleep(125);
    div.innerHTML = "100% Fre";
    await sleep(125);
    div.innerHTML = "100% Free";
    await sleep(1250);

    // Deleting down to "100% "
    div.innerHTML = "100% Fre";
    await sleep(125);
    div.innerHTML = "100% Fr";
    await sleep(125);
    div.innerHTML = "100% F";
    await sleep(125);
    div.innerHTML = "100% ";
    await sleep(500); // Pause at "100% "

    // Typing "100% Open Source" again
    div.innerHTML = "100% O";
    await sleep(125);
    div.innerHTML = "100% Op";
    await sleep(125);
    div.innerHTML = "100% Ope";
    await sleep(125);
    div.innerHTML = "100% Open";
    await sleep(125);
    div.innerHTML = "100% Open S";
    await sleep(125);
    div.innerHTML = "100% Open So";
    await sleep(125);
    div.innerHTML = "100% Open Sou";
    await sleep(125);
    div.innerHTML = "100% Open Sour";
    await sleep(125);
    div.innerHTML = "100% Open Sourc";
    await sleep(125);
    div.innerHTML = "100% Open Source";



    startTypingAnimation();
}


function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}





