import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
    const { currentUser, isAdmin, loading } = useAuth();
    const location = useLocation();

    if (loading) return <div>Loading...</div>;

    if (!currentUser || !isAdmin) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminRoute;
