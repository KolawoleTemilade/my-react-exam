import ErrorTest from './pages/ErrorTest';
import Home from './pages/Home';
import PageNotFound from './pages/NotFound';
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"

const pages = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "*", element: <PageNotFound/>
  },
  {
    path: "/triggererror", element: <ErrorTest/>
  }
])


function App() {
  
  return (
    <>
      <RouterProvider router={pages} />
    </>
  );
}

export default App;
