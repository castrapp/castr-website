import './QuickTutorial.css'
import { useEffect, useState } from 'react';


const QuickTutorialCard = ({ header, description, style }) => {
    return (
        <div className='quick-tutorial-card' style={style}>

        </div>
    )
}

const QuickTutorial = () => {

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
        <div id="quick-tutorial">

            <div id="quick-tutorial-header">
                How it works

                <div id="quick-tutorial-header-description">
                Get started in just 3 simple steps. Create a new scene. Add your sources. Then cast. 
                </div>
            </div>

            <span id='quick-tutorial-subheader'>
                <span style={{ color: 'rgb(29, 29, 31)'}}>Step 1.</span> Create a new scene
            </span>


            <div id='quick-tutorial-cards-container' style={{ paddingLeft: `${scrollPadding}px`, paddingRight:`${scrollPadding}px` }}>
                <QuickTutorialCard 
                    style={{
                        backgroundColor: 'rgb(245, 245, 247)',
                        color: 'white',
                    }}
                    header="Scenes"
                    description="Create, customize, and manage an unlimited number of scenes. Seamlessly switch between different setups, whether you're streaming, recording, or presenting. Scenes allow you to tailor your workspace for every occasion, giving you the flexibility to focus on what's most important."
                />
                <QuickTutorialCard 
                    style={{
                        backgroundColor: 'rgb(245, 245, 247)',
                        color: 'white',
                    }}
                    header="Sources"
                    description="Add and organize as many sources as you need. With support for various input types, including video, audio, images, and more, your creativity knows no bounds. Mix and match sources to build dynamic and engaging scenes that captivate your audience."
                />
                
                <QuickTutorialCard 
                    style={{
                        backgroundColor: 'rgb(245, 245, 247)',
                        color: 'white',
                    }}
                    header="Record"
                    description="Capture every detail with high-resolution recording, up to 4K at 60fps, depending on your Mac's capabilities. Perfect for tutorials, gameplay, or professional content, ensuring sharp and fluid recordings every time."
                />
                
            </div>

        </div>
    )
}

export { QuickTutorial };