import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserAuthContext } from "../contexts/UserAuthContext";
import Login from "../components/Login";

const AuthGuard = ({ children }) => {
    const { isLoggedIn } = useContext(UserAuthContext);

    const { pathname } = useLocation();
    const [requestedLocation, setRequestedLocation] = useState(null);

    if (!isLoggedIn) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return <Login />;
    }

    if (requestedLocation && pathname !== requestedLocation) {
        setRequestedLocation(null);
        return <Navigate to={requestedLocation} />;
    }

    return <>{children}</>;
}


export default AuthGuard;