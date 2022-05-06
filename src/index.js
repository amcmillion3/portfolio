import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement).render(
  <App />
);
