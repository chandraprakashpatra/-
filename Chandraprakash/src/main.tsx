import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Ensure this is the global CSS
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
