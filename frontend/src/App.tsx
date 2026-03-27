import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AboutPage from "./pages/public/AboutPage";
import AnalyticsPage from "./pages/public/AnalyticsPage";
import HomePage from "./pages/public/HomePage";
import WeeklySummaryPage from "./pages/public/WeeklySummaryPage";

function ProtectedRoute({ children }: { children: JSX.Element }): JSX.Element {
  const token = localStorage.getItem("aah_token");
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function App(): JSX.Element {
  const location = useLocation();
  const isAdminLogin = location.pathname === "/admin/login";

  return (
    <div className="min-h-screen">
      {!isAdminLogin ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weekly/:id" element={<WeeklySummaryPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/categories" replace />} />
          <Route path="incidents" element={<Navigate to="/admin/categories" replace />} />
          <Route path="categories" element={<AdminCategoriesPage />} />
          <Route path="summaries" element={<Navigate to="/admin/categories" replace />} />
          <Route path="stat-blocks" element={<Navigate to="/admin/categories" replace />} />
          <Route path="sources" element={<Navigate to="/admin/categories" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
