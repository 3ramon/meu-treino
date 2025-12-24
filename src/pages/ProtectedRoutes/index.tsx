import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import "./style.css";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
    children,
}) => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/FormUser" />;
    }

    return <>{children}</>;
};
