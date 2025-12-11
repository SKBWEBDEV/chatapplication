
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Ragister from "./components/Chatapplication/Ragister";
import Login from "./components/Chatapplication/Login";
import firebaseConfig from "./components/firebase/firebaseconfig";
import Forgote from "./components/Chatapplication/Forgote";
import Chat from "./components/Chatapplication/Chat";
import Homef from "./components/Chatapplication/Homef"
import Massage from "./components/Massege/Massage";
import Chatting from "./components/Chatapplication/Chatting";
import Satting from "./components/Chatapplication/Satting"
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
    element: <Homef/>,
  },
 
  {
    path: "/forgote",
    element: <Forgote/>,
  },
  {
    path: "/msg",
    element: <Massage/>,
  },
  {
    path: "/setting",
    element: <Satting/>,
  },
  {
    path: "/chat",
    element: <Chatting/>,
  },
 
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
