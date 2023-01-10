import "./App.scss";
import { MyProfile } from "./components/User/MyProfile";
import { Root } from "./components/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MyProfile />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
