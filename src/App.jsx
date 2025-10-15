// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import Ragister from "./components/Chatapplication/Ragister";
// import Login from "./components/Chatapplication/Login";

import Login from "./components/Chatapplication/Login";
import Ragister from "./components/Chatapplication/Ragister";

function App() {
  //   const router = createBrowserRouter([
  //   {
  //      path: "/",
  //     element: <Ragister />
  //   },

  // ]);

  return (
    <>
      <Ragister />
      <Login />
    </>
  );
}

export default App;
