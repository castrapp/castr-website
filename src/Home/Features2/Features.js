

import './Features.css'
import { useEffect, useState } from 'react';

const FeatureCard = ({ header, description, style }) => {
    return (
        <div className='feature-card' style={style}>
            <div className='feature-card-header'>{header}</div>
            <div className='feature-card-description'>{description}</div>
        </div>
    )
}



const Features = () => {

    const [scrollPadding, setScrollPadding] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const onResize = () => {
        const disatanceFromLeft = document.getElementById('features-header').getBoundingClientRect();
        setScrollPadding(disatanceFromLeft.left)
    }

    return (
        <div id='features'>

            {/* <div id='features-nav'>Hi</div> */}

            <div id='features-header'>
                <span style={{ color: 'white'}}>Features.</span> Built in, seamless, and easy to use.
            </div>

            <div id='features-cards-container' style={{ paddingLeft: `${scrollPadding}px`, paddingRight:`${scrollPadding}px` }}>
                <div className='feature-card'></div>
                <div className='feature-card'></div>
                <div className='feature-card'></div>
                
            </div>
        </div>
    )
}
export { Features };