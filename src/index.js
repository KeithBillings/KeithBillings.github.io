import React from 'react';
import { hydrate, render } from 'react-dom';

// Components
import App from './App';

// Styles
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
