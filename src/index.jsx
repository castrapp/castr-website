import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
  

  