
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import UserDashboard from "./pages/user/UserDashboard";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import BookService from "./pages/user/BookService";
import BookingHistory from "./pages/user/BookingHistory";
import Orders from "./pages/provider/Orders";
import Approvals from "./pages/admin/Approvals";

import PageWrapper from "./components/PageWrapper";

import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user" element={
            <ProtectedRoute role="User">
              <UserDashboard />
            </ProtectedRoute>
          } />

          <Route path="/provider" element={
            <ProtectedRoute role="Provider">
              <ProviderDashboard />
            </ProtectedRoute>
          } />

          <Route path="/admin" element={
            <ProtectedRoute role="Admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="/user/book" element={ <ProtectedRoute role="user"><BookService /> </ProtectedRoute>} />
<Route path="/user/history" element={<BookingHistory />} />
<Route path="/provider/orders" element={<Orders />} />
<Route path="/admin/approvals" element={<Approvals />} />

          <Route
  path="/user"
  element={
    <ProtectedRoute role="user">
      <PageWrapper>
        <UserDashboard />
      </PageWrapper>
    </ProtectedRoute>
  }
/>

        </Routes>
      <AuthProvider>
  <Routes>
    {/* all routes */}
  </Routes>
  <Footer />
</AuthProvider>

    </AuthProvider>
  );
}

export default App;
