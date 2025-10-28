import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

export default function ProtectedRoutes({ children, allowedRoles }) {
    const { user, loading } = useAuth();
    if (loading) return <Loading />

    if (!user) return <Navigate to="/login" replace />


    if (!allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />
    }


    return children;
}