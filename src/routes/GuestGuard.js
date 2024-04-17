import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "../contexts/UserAuthContext";

const GuestGuard = ({ children }) => {
    const { isLoggedIn } = useContext(UserAuthContext);

    if (isLoggedIn) {
        return <Navigate to={'/'} />;
    }

    return <>{children}</>;
}

export default GuestGuard