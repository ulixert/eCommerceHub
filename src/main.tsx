import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { queryClient } from '@/api/queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
