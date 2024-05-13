import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
