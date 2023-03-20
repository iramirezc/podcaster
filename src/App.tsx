import { RouterProvider } from 'react-router-dom';
import { router } from 'app/router';
import { AppHeader } from 'components';

function App() {
  return (
    <>
      <AppHeader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
