import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './components/Layout/Layout.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import './index.css'

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
  )
}

export default App
