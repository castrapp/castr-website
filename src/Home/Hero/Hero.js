import './Hero.css'
import background from './background.jpg'
import picture from './photo.png'

const Hero = () => {

    return (
        <div id='hero'>
            <div id='hero-header'>
                <span>Create.&nbsp;</span>
                <span>Customize.&nbsp;</span>
                <span style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    Cast.
                    {/* <div id='hero-header-caret'/> */}
                </span>
            </div>

            <div id='hero-image-container'>
                
                <img id='hero-image' src={picture} />
                <img id='hero-background' src={background} />
            </div>
            
           
        </div>
    )
}

export { Hero }