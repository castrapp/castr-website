import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


/* 
	Un-comment the imports below, when you want to use them with webpack.
	Otherwise, if using them with vite, then comment them out.
*/
import './App.css';
import './Navigation/Navigation.css';
import './Navigation/NavigationBlur.css';
import './Test.css';
import './Pages/Download/Download.css';
import './Pages/Privacy/Privacy.css';
import './Pages/Home2/Home.css';
import './Pages/Home2/Hero/Hero.css';
import './Pages/Home2/Subhero/Subhero.css';
import './Pages/Home2/Features/Features.css';
import './Pages/Home2/Opensource/Opensource.css';
import './Pages/Home2/Tutorial/Tutorial.css';
import './Pages/Home2/Download/Download.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);


// main.js (or your entry file)
if (import.meta.hot) {


	import.meta.hot.on('vite:beforeUpdate', (payload) => {
		console.log('The payload is: ', payload)

	  payload.updates.forEach((update) => {
		if (update.type === 'css-update') {

		
			// if (update?.path) {
			// 	// Step 1: Parse the result string to get the .css file path
			// 	const result = update?.path.match(/.*\.css/)[0];
			// 	console.log('The parsed string is: ', result);
			  
			// 	// Step 2: Find all link elements in the <head> whose href contains the result string
			// 	const allLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
			// 	const matchingLinks = allLinks.filter(link => link.href.includes(result));
			  
			// 	// Step 3: Remove the matching links from the <head>
			// 	matchingLinks.forEach(link => document.head.removeChild(link));
			  
			// 	// Step 4: Add the links back to the <head>
			// 	matchingLinks.forEach(link => document.head.appendChild(link));
			//   }
			// console.log('its a css update: ', update)
			

		// Is it possible to just invalidate the update here and prevent
		// anything from happening


		//   const link = findStylesheet(update.path);
		//   if (link) {
		// 	// Clone the existing <link> tag
		// 	const newLink = link.cloneNode();
		// 	// Remove the old <link> tag
		// 	console.log('link is: ', link)
		// 	link.parentNode.removeChild(link);
		// 	// Add the new <link> tag to the same position
		// 	document.head.appendChild(newLink);
		//   } else {
		// 	console.warn(`CSS HMR: Could not find <link> tag for ${update.path}`);
		//   }
		}
	  });

	    // Remove CSS updates from the updates array
		payload.updates = payload.updates.filter((update) => update.type !== 'css-update');
	});
	

	// import.meta.hot.on('vite:afterUpdate', (payload) => {
	// 	console.log('The after update payload is: ', payload)
	

	// });
  }



// if (import.meta.hot) {
// 	import.meta.hot.on('vite:beforeUpdate', (payload) => {
// 	  // Filter out CSS updates
// 	  const nonCssUpdates = payload.updates.filter((update) => update.type !== 'css-update');
  
// 	  if (nonCssUpdates.length === 0) {
// 		// All updates were CSS updates, prevent further processing
// 		console.log('Ignoring CSS HMR updates.');
// 		return;
// 	  }
  
// 	  // Replace the updates with the filtered non-CSS updates
// 	  payload.updates = nonCssUpdates;
// 	});
//   }
  
  
  // Helper function to find the <link> tag for a given CSS file
  function findStylesheet(hrefWithoutQuery) {
	const links = document.querySelectorAll('link[rel="stylesheet"]');
	for (const link of links) {
	  const linkHref = link.href.split('?')[0].replace(location.origin, '');
	  if (linkHref === hrefWithoutQuery) {
		console.log('new link is: ', link)
		return link;
	  }
	}
	return null;
  }
  

  