import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/createPage";
import UpdateCard from "./pages/UpdateCard";
import { AuthProvider } from "./context/AuthProvider"; // ✅ Named import
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div data-theme="dracula">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/create" element={
              <ProtectedRoute>
                <CreatePage />
              </ProtectedRoute>
            } />
            <Route path="/update/:id" element={
              <ProtectedRoute>
                <UpdateCard />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
