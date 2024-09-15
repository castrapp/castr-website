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
            {/* <button className='opensource-button'>View on <GitHubLogoText /></button> */}
            <button className='opensource-button'>View on GitHub</button>
            <div id='opensource-background' />
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






const GitHubLogoText = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        id="github-logo-text"
        viewBox="0 0 999 272" 
    >
        <path d="M660-2280v-73H635a4.3,4.3,0,0,1-4-4v-31c0-2,1-3,3-4,2,0,26-6,26-6v-49c0-3,1-4,3-4h49a2.65,2.65,0,0,1,2.25.75A2.651,2.651,0,0,1,715-2448v47h34a4.3,4.3,0,0,1,4,4v40a4.3,4.3,0,0,1-4,4H714v69c0,11,6,19,23,19,6,0,11-1,13-1a4.3,4.3,0,0,1,4,4v33a5.2,5.2,0,0,1-2,4c-2,1-16,5-28,5C698-2220,660-2225,660-2280Zm552,40s-1,10-2,11c0,1-2,2-3,2h-33a4.3,4.3,0,0,1-4-4v-247a4.3,4.3,0,0,1,4-4h47a4.3,4.3,0,0,1,4,4v85s18-12,45-12,66,10,66,86-25,98-68,98C1231-2221,1212-2240,1212-2240Zm35-121c-13,1-24,8-24,8v79s8.863,8.863,28.543,9c23.534-.137,28.456-9.324,28.456-52,0-35.74-12.771-44.336-27.618-44.335A46.258,46.258,0,0,0,1247-2361Zm-262,79v-114a4.3,4.3,0,0,1,4-4h47a4.3,4.3,0,0,1,4,4v106c0,16,4,24,21,24a52.483,52.483,0,0,0,29-9v-121a4.3,4.3,0,0,1,4-4h47a4.3,4.3,0,0,1,4,4v166a4.3,4.3,0,0,1-4,4h-30c-1,0-2-1-3-2s-2-10-2-10-25,17-56,17C1012-2221,985-2233,985-2282Zm-648-71c0-116,56-139,113-139,49,0,68,11,71,13,2,1,2,2,2,3l-9,40c0,2-3,5-5,4-8-2-20-7-49-7-33,0-68,9-68,83s33,83,57,83c21,0,28-3,28-3v-51H444a4.3,4.3,0,0,1-4-4v-41a4.3,4.3,0,0,1,4-4h85a4.3,4.3,0,0,1,4,4v129a3.674,3.674,0,0,1-1,3s-28,19-74,19C403-2221,337-2238,337-2353Zm573,126a4.3,4.3,0,0,1-4-4v-106H832v106a4.3,4.3,0,0,1-4,4H781a4.3,4.3,0,0,1-4-4v-247a4.3,4.3,0,0,1,4-4h47a4.3,4.3,0,0,1,4,4v91h74v-91a4.3,4.3,0,0,1,4-4h47a4.3,4.3,0,0,1,4,4v247a4.3,4.3,0,0,1-4,4Zm-344,0c-4,0-7-1-7-6v-164a4.3,4.3,0,0,1,4-4h47a4.3,4.3,0,0,1,4,4l1,164c0,4-1,6-6,6Zm-10-218a31,31,0,0,1,31-31,31,31,0,0,1,31,31,31,31,0,0,1-31,31A31,31,0,0,1,556-2445Z" transform="translate(-337 2492)" fill="#111"/>
    </svg>
)