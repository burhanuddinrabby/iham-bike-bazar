import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Login/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';


function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;

    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;