import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
// import { NavigationTemp } from './NavigationTemp/NavigationTemp';
import { Footer } from './Footer/Footer';
import { Home } from './Pages/Home2/Home';
// import { Home } from './Home/Home';
import { Download } from './Pages/Download/Download';
import { Contact } from './Pages/Contact/Contact';
import { Privacy } from './Pages/Privacy/Privacy';

import './Common/common.css'


const App = () => {

	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/download" element={<Download />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/privacy" element={<Privacy />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	)
}

export default App;
