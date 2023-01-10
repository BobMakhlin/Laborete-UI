import "./App.scss";
import { MyProfile } from "./components/User/MyProfile";
import { Error } from "./components/Error/Error";
import { Root } from "./components/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
