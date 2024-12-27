import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    useEffect(() => {
        if (!isAuthenticated) {
            alert("Authentication needed. Please login first");
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return Component
};

export default ProtectedRoute;