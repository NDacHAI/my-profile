import './App.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);


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
