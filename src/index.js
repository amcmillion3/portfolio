import * as ReactDOMClient from 'react-dom/client';
import './index.scss';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement).render(
  <App />
);
