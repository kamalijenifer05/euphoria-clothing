"use client";
import {useEffect} from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ element: Component }) => {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem("token") !== null;
    useEffect(() => {
        if (!isAuthenticated) {
            alert("Authentication needed. Please login first");
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return router.push('/');
    }
    return Component
};

export default ProtectedRoute;