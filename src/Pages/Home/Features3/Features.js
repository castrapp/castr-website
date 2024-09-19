

import './Features.css'
import { useEffect, useState } from 'react';
import background1 from './background-1.webp';
import background2 from './background-2.webp';
import background3 from './background-3.webp';
import background4 from './background-4.webp';
import background5 from './background-7.webp';


const Features = () => {

    const [scrollPadding, setScrollPadding] = useState(0);
    const [selectedFeature, setSelectedFeature] = useState('feature-scenes');

    const onResize = () => {
        const disatanceFromLeft = document.getElementById('features-header').getBoundingClientRect();
        setScrollPadding(disatanceFromLeft.left)
    }

    const handleFeatureSelect = (e) => {
        document.querySelector(`#${selectedFeature}`).removeAttribute('selected')

        document.querySelector(`#${e.nativeEvent.target.id}`).setAttribute('selected', '')
        setSelectedFeature(e.nativeEvent.target.id)
    }

    useEffect(() => {

        document.querySelector(`#feature-scenes`).setAttribute("selected", "")
        
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
                Features. Built in, seamless, and easy to use.
            </div>

            <div id="features-selector">
                <div id='feature-scenes' className='feature-selector-card' onClick={handleFeatureSelect}>Scenes</div>
                <div id='feature-sources' className='feature-selector-card' onClick={handleFeatureSelect}>Sources</div>
                <div id='feature-recording' className='feature-selector-card' onClick={handleFeatureSelect}>Recording</div>
                <div id='feature-virtualcamera' className='feature-selector-card' onClick={handleFeatureSelect}>Virtual Camera</div>
                <div id='feature-native' className='feature-selector-card' onClick={handleFeatureSelect}>Native for MacOS</div>
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