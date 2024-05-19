import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import dotenv from 'dotenv';

import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Records from "./pages/Records";

dotenv.config();

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/records"
          element={
            <ProtectedRoute>
              <Records />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
