import './Hero.css';
import { Logo } from '../SVGs/SVG';

const Hero = () => {

    return  (
        <div id="hero">

            <Logo/>

            <h6>Castr</h6>

            <h1>A custom screencasting tool<br /> natively designed for MacOS.</h1>

        </div>
    )
}

export { Hero }