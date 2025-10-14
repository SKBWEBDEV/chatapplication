import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Ragister from "./components/Chatapplication/Ragister";
import Login from "./components/Chatapplication/Login";


function App() {
  const router = createBrowserRouter([
  {
    path: "/ragister",
    element: <Ragister/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
 
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
