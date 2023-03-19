import { createRoot } from 'react-dom/client';
import { ThemeProvider, StoreProvider } from 'app/providers';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { getStoredPodcasts } from 'app/storage';

async function start() {
  const container = document.getElementById('root')!;
  const root = createRoot(container);
  const storedPodcasts = getStoredPodcasts();

  root.render(
    <StoreProvider preloadedState={{ podcasts: storedPodcasts }}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  );
}

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
