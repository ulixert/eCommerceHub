import { RouterProvider } from 'react-router-dom';

import { appRoutes } from '@routes/AppRoutes.tsx';

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
