import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import notifier from 'node-notifier'; // Import node-notifier

// Define bright ANSI escape codes for terminal colors
const brightLogColors = [
  '\x1b[91m',  // Bright Red
  '\x1b[94m',  // Bright Blue
  '\x1b[92m',  // Bright Green
  '\x1b[93m',  // Bright Yellow
  '\x1b[95m',  // Bright Magenta
];
const resetStyle = '\x1b[0m';  // Reset to default color and style
const clearTerminal = '\x1b[2J\x1b[H';  // Clear terminal

let logCount = 0; // Track the number of logs to cycle colors

export default defineConfig({
  logLevel: 'silent',  // Suppress Vite's default logging
  plugins: [
    react(),
    {
      name: 'disable-css-hmr',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.css')) {
          // Clear the terminal before each log
          console.log(clearTerminal);

          // Cycle through the bright colors based on logCount
          const colorStyle = brightLogColors[logCount % brightLogColors.length];

          // Get the current time as a string
          const time = new Date().toLocaleTimeString();

          // Toggle between prefixing and suffixing the time to the message
          let message;
          if (logCount % 2 === 0) {
            message = `-- CSS file updated at: ${time} --`;  // Time as suffix
          } else {
            message = `${time}: CSS file updated`;  // Time as prefix
          }

          // Log the message with the corresponding bright terminal color
          console.log(`${colorStyle}${message}${resetStyle}`);


          // Send macOS notification
          notifier.notify({
            title: 'CSS',
            message: message,
            sound: false, // Optional: Play a sound with the notification
          });

          // Increment the log count to cycle through colors and toggle placement
          logCount++;

          // Return undefined to keep the default HMR behavior for other files
          return undefined;
        } else if(file.endsWith('.js') || file.endsWith('.jsx')) {
           // Clear the terminal before each log
           console.log(clearTerminal);

           // Cycle through the bright colors based on logCount
           const colorStyle = brightLogColors[logCount % brightLogColors.length];
 
           // Get the current time as a string
           const time = new Date().toLocaleTimeString();
 
           // Toggle between prefixing and suffixing the time to the message
           let message;
           if (logCount % 2 === 0) {
             message = `-- JSX file updated at: ${time} --`;  // Time as suffix
           } else {
             message = `${time}: JSX file updated`;  // Time as prefix
           }
 
           // Log the message with the corresponding bright terminal color
           console.log(`${colorStyle}${message}${resetStyle}`);

           notifier.notify({
            title: 'JavaScript',
            message: message,
            sound: false, // Optional: Play a sound with the notification
          });
 
           // Increment the log count to cycle through colors and toggle placement
           logCount++;
 
           // Return undefined to keep the default HMR behavior for other files
           return undefined;
        }
      },
    },
  ],
  server: {
    open: true,  // Automatically open the browser when the dev server starts
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',  // Ensure CSS files are not renamed
      },
    },
    sourcemap: true,  // Enable source maps for debugging
  },
  css: {
    devSourcemap: true,  // Enable source maps for CSS
  },
});
