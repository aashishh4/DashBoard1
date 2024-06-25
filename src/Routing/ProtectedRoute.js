import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthLogin';

const ProtectedRoute = ({ element }) => {
    const { isAuth } = useAuth();

    return isAuth ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
