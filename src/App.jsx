import './App.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      errorElement: <PageNotFound />,
    },
  ]);

  return (
    <RouterProvider router={router} />

  );
}

export default App;
