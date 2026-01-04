import AuthRequired from './AuthRequired';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    console.log('ProtectedRoute - currentUser:', currentUser, 'loading:', loading);

    if (loading) return <div>Loading...</div>;

    if (!currentUser) {
        return <AuthRequired />;
    }

    return children;
};

export default ProtectedRoute;

