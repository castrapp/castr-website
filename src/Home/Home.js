import { Hero } from './Hero/Hero';
import { Features } from './Features/Features';
import { QuickTutorial } from './QuickTutorial/QuickTutorial';
import { Opensource } from './Opensource/Opensource';
import { Download } from './Download/Download';
import './Home.css'


const Home = () => {
	return (
		<div id='home'>

            <Hero />

            <Features />

            <QuickTutorial />

            <Opensource />

            <Download />

		</div>
	);
}
export { Home }
