
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Ragister from "./components/Chatapplication/Ragister";
import Login from "./components/Chatapplication/Login";
import firebaseConfig from "./components/firebase/firebaseconfig";
import Forgote from "./components/Chatapplication/Forgote";
import Chat from "./components/Chatapplication/Chat";
import Home from "./components/Chatapplication/Homef";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat/>,
  },
  {
    path: "/register",
    element: <Ragister/>,
  },
   {
    path: "/login",
    element: <Login/>,
  },
   {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/forgote",
    element: <Forgote/>,
  },
 
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
