import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import Upload from "./pages/Upload";
import Records from "./pages/Records";
import {  AuthProvider } from "./contexts/authContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/upload",
    element: <Upload/>,
  },
  {
    path: "/records",
    element: <Records/>,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  )
}

export default App
