import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import "./style.css";
import { useNavigation } from "../../hooks/useNavigation";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
    children,
}) => {
    const { user } = useContext(UserContext);

    // const { handleNavigation } = useNavigation();
    if (!user) {
        return <Navigate to="/Login" />;
    }

    return <>{children}</>;
};
