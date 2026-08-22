import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

document.title = 'Vaishnavi Gaikwad — Full Stack Developer & Product Builder';
const metaDescription = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', 'Vaishnavi Gaikwad is a Full Stack Developer, Product Builder, and Problem Solver with 2+ years of experience.');
document.head.appendChild(metaDescription);
const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.setAttribute('content', 'Vaishnavi Gaikwad — Full Stack Developer & Product Builder');
document.head.appendChild(ogTitle);
const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.setAttribute('content', 'A carefully made body of work across full-stack development, product building, and problem solving.');
document.head.appendChild(ogDescription);

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
