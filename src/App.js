import "./App.scss";
import { MyProfile } from "./components/User/MyProfile";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyProfile />,
  },
  {
    path: "/my-profile",
    element: <MyProfile />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
