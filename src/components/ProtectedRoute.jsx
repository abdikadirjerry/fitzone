import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    window.dispatchEvent(
      new CustomEvent("fitzone:open-auth", {
        detail: { mode: "login" },
      }),
    );

    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
