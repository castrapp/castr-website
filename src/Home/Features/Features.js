

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

            <span id='features-header'>
                <span style={{ color: 'rgb(29, 29, 31)'}}>Features.</span> Built in, seamless, and easy to use.
            </span>

            <div id='features-cards-container' style={{ paddingLeft: `${scrollPadding}px`, paddingRight:`${scrollPadding}px` }}>
                <FeatureCard 
                    style={{
                        background: 'linear-gradient(to top, #0C0D1F, #335279)',
                        color: 'white',
                    }}
                    header="Scenes"
                    description="Create, customize, and manage an unlimited number of scenes. Seamlessly switch between different setups, whether you're streaming, recording, or presenting. Scenes allow you to tailor your workspace for every occasion, giving you the flexibility to focus on what's most important."
                />
                <FeatureCard 
                    style={{
                        background: 'linear-gradient(-30deg, #d754ad 0%, #d754ad 10%, #f96785 62%, #fe7333 100%)',
                        color: 'white',
                    }}
                    header="Sources"
                    description="Add and organize as many sources as you need. With support for various input types, including video, audio, images, and more, your creativity knows no bounds. Mix and match sources to build dynamic and engaging scenes that captivate your audience."
                />
                
                <FeatureCard 
                    style={{
                        background: 'linear-gradient(to bottom right, #fccb4a, #f0712a)',
                        color: 'white',
                    }}
                    header="Record"
                    description="Capture every detail with high-resolution recording, up to 4K at 60fps, depending on your Mac's capabilities. Perfect for tutorials, gameplay, or professional content, ensuring sharp and fluid recordings every time."
                />
                <FeatureCard 
                    style={{
                        background: '#E2F0FD',
                        color: 'black',
                    }}
                    header="Virtual Camera"
                    description="Turn your desktop into a virtual camera that can be used in any application. Stream your custom scenes, presentations, or screen shares to video conferencing tools, live streaming platforms, and more, all with the click of a button."
                />
                <FeatureCard 
                    style={{
                        background: '#458CF5',
                        color: 'white',
                    }}
                    header="Native for MacOS"
                    description="Designed exclusively for macOS, Castr delivers a smooth, responsive experience tailored to the unique capabilities of your Apple hardware. Enjoy a native macOS interface and optimized experience."
                />
                
            </div>
        </div>
    )
}
export { Features };