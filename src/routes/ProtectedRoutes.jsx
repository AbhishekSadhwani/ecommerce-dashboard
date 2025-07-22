import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoutes = () => {
    const { token } = useAuth();
    return token ? <Outlet /> : <Navigate to="/login" />;
};