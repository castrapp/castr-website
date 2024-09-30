import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';




// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
// import { NavigationTemp } from './NavigationTemp/NavigationTemp';
import { Footer } from './Footer/Footer';
import { Home } from './Pages/Home2/Home';
// import { Home } from './Home/Home';
import { Download } from './Pages/Download/Download';
import { Contact } from './Pages/Contact/Contact';
import { Privacy } from './Pages/Privacy/Privacy';

import './Common/common.css'

import favicon192 from './icon192x192.png'




const App = () => {

	useEffect(() => {
		const link = document.createElement('link');
		link.rel = 'icon';
		link.href = favicon192;  // Set the path to your favicon file
		document.head.appendChild(link);
	  }, []);

	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/download" element={<Download />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/privacy" element={<Privacy />} />
			</Routes>
			<Footer />
		</Router>

		// <>
		// <Navigation />

		// 	<Home />
	

		// <Footer />
		
		// </>
	)
}

export default App;