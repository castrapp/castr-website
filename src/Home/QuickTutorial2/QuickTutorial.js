import './QuickTutorial.css'
import { useEffect, useState } from 'react';
import background1 from './background-1.webp'
import background2 from './background-1.webp'
import background3 from './background-1.webp'




const QuickTutorial = () => {
    const [scrollPadding, setScrollPadding] = useState(0);

    const onResize = () => {
        const disatanceFromLeft = document.getElementById('quick-header-wrapper').getBoundingClientRect();
        setScrollPadding(disatanceFromLeft.left)
    }

    useEffect(() => {
        
        onResize()
        
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

 

    return (
        <div id="quick-tutorial">

            <div id="quick-tutorial-header">How it works</div>
            {/* <div id="quick-tutorial-subheader">How it works</div> */}
            <div id='quick-header-wrapper'>
                <div id='quick-header'>
                    <span style={{ color: 'white'}}>Step 1.</span> Create a scene
                </div>
                <div className='chevron-wrapper' style={{ marginLeft: 'auto'}}>
                    <Chevron style={{ width: '14px', transform: 'rotate(90deg)', fill: 'rgba(255, 255, 255, 0.15)'}}/>
                </div>
                <div className='chevron-wrapper'>
                    <Chevron style={{ width: '14px', transform: 'rotate(-90deg)'}}/>
                </div>
            </div>
          
            {/* <div id='quick-subheader'>
                <span style={{ color: 'white'}}>Step 1.</span>&nbsp; Create a Scene
            </div> */}
            <div id='quick-tutorial-container'>

                <div style={{ width: `${scrollPadding}px`}} />

                <div id="quick-tutorial-card" style={{ backgroundImage: `url(${background1})`}}>
                    <div>Create a scene</div>
                </div>
                <div id="quick-tutorial-card" style={{ backgroundImage: `url(${background1})`}}>
                    <div>Add a source</div>
                </div>
                <div id="quick-tutorial-card" style={{ backgroundImage: `url(${background1})`}}>
                    <div>Cast your scene</div>
                </div>

                <div style={{ width: `${scrollPadding}px`}} />
            </div>

        </div>
    )
}

export { QuickTutorial };






const Chevron = ({ style }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 14 8" 
      fill="white" 
      style={style}
    >
        <path
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z" 
        >
        </path>
        
    </svg>
)