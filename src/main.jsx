import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Only import from react-dom/client
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create the root

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
