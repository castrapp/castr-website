

import './Features.css'
import { useEffect, useState } from 'react';
import background1 from './background-1.webp';
import background2 from './background-2.webp';
import background3 from './background-3.webp';
import background4 from './background-4.webp';
import background5 from './background-7.webp';


const Features = () => {

    const [scrollPadding, setScrollPadding] = useState(0);

    const onResize = () => {
        const disatanceFromLeft = document.getElementById('features-header').getBoundingClientRect();
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
        <div id='features'>

            {/* <div id='features-nav'>Hi</div> */}

            <div id='features-header'>
                <span style={{ color: 'white'}}>Features.</span> Built in, seamless, and easy to use.
            </div>

            <div id='features-cards-container' >
                <div style={{ width: `${scrollPadding}px`}} />
                
                <div className='feature-card'>
                <div className='feature-card-image-blur' style={{ backgroundImage: `url(${background1})` }} />
                <div className='feature-card-image' style={{ backgroundImage: `url(${background1})` }} />
                    <div className='feature-card-header'>Scenes</div>
                    <button className='feature-card-button'>
                        <div />
                        <div />
                    </button>
                </div>

                <div className='feature-card'>
                    <div className='feature-card-image-blur' style={{ backgroundImage: `url(${background2})` }} />
                    <div className='feature-card-image' style={{ backgroundImage: `url(${background2})` }} />
                    <div className='feature-card-header'>Sources</div>
                    <button className='feature-card-button'>
                        <div />
                        <div />
                    </button>
                </div>

                <div className='feature-card'>
                    <div className='feature-card-image-blur' style={{ backgroundImage: `url(${background3})` }} />
                    <div className='feature-card-image' style={{ backgroundImage: `url(${background3})` }} />
                    <div className='feature-card-header'>Virtual Camera</div>
                    <button className='feature-card-button'>
                        <div />
                        <div />
                    </button>
                </div>

                <div className='feature-card'>
                    <div className='feature-card-image-blur' style={{ backgroundImage: `url(${background4})` }} />
                    <div className='feature-card-image' style={{ backgroundImage: `url(${background4})` }} />
                    <div className='feature-card-header'>Recording</div>
                    <button className='feature-card-button'>
                        <div />
                        <div />
                    </button>
                
                </div>
                <div className='feature-card'>
                    <div className='feature-card-image-blur' style={{ backgroundImage: `url(${background5})`, backgroundSize: 'cover' }} />
                    <div className='feature-card-image' style={{ backgroundImage: `url(${background5})`, backgroundSize: 'cover'}} />
                    <div className='feature-card-header'>Native for MacOS</div>
                    <button className='feature-card-button'>
                        <div />
                        <div />
                    </button>
                </div>

                
                <div style={{ width: `${scrollPadding}px`, minWidth: '20px'}} />
            </div>
        </div>
    )
}
export { Features };