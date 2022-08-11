import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Share/Loading/Loading";


const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading />;
    }
    if (!user) {
        return <Navigate to="/authentication" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;