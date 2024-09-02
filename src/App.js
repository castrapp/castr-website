import './App.css';
import './colors.css'

import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { OpenSource } from './components/OpenSource/OpenSource';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Privacy } from './Privacy/Privacy';

const Home = () => {
	return (
		<div id='app'>

			<Navigation />

			<Hero />

			<OpenSource />

			<div id='filler'></div>

			<div id="privacy">
            Privacy Policy for Castr

            Castr does not collect, store, or share any personal data. 
            We do not use cookies or any tracking technologies. 
            This app functions entirely on your device without transmitting any information.
       	 	</div>

		</div>
	);
}



const App = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacy" element={<Privacy />} />
			</Routes>
		</Router>
	)
}

export default App;
