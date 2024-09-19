export default {
  mount: {
    src: '/', // Serve 'src' directory as root
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
  ],
  packageOptions: {
    knownEntrypoints: ['react', 'react-dom'], // Make sure React is correctly included
  },
  buildOptions: {
    sourcemap: true,  // Useful for debugging
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure .jsx files are resolved
  },
};
