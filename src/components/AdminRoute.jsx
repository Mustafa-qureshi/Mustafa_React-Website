import AuthRequired from './AuthRequired';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
    const { currentUser, isAdmin, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!currentUser || !isAdmin) {
        return <AuthRequired />;
    }

    return children;
};

export default AdminRoute;
