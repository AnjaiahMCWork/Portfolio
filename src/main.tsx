import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize the observer after the app is mounted
setTimeout(() => {
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Add staggered animation to child elements
        const children = entry.target.querySelectorAll('.stagger-animation');
        children.forEach((child, index) => {
          (child as HTMLElement).style.animationDelay = `${index * 100}ms`;
        });
      }
    });
  };

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px'
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const refreshObserver = () => {
    observer.disconnect();
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  };

  refreshObserver();

  // Refresh observer when subsection changes
  document.addEventListener('subsectionChange', () => {
    setTimeout(refreshObserver, 100);
  });

  // Refresh observer when returning from project details
  document.addEventListener('returnFromProject', () => {
    setTimeout(refreshObserver, 100);
  });
}, 100);