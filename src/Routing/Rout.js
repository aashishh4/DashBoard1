import { Routes, Route, Navigate } from 'react-router-dom'; 
import Home from '../Component/Home';
import Navbar from './Navbar';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import Dasboard from '../Menu-item/Dasboard';
import Page from '../Menu-item/Page';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../context/AuthLogin';

function Rout() {
    const { isAuth } = useAuth();

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} /> 
                <Route path="/about" element={<ProtectedRoute element={<About />} />} />
                <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
                <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />  {/* Redirect to home if already logged in */}
                <Route path="/register" element={<Register />} />
                <Route path="/dasboard" element={<ProtectedRoute element={<Dasboard />} />} /> 
                <Route path="/page" element={<ProtectedRoute element={<Page />} />} /> 
                {/* Redirect any unknown routes to the login page */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default Rout;
