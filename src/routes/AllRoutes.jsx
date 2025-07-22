import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';
import { Login, Dashboard, Products, Orders, Users, Analytics, Settings } from '../pages';
import ForgotPassword from '../pages/ForgotPassword';
import { ProtectedRoutes } from './ProtectedRoutes';

const AllRoutes = () => {
    return (
        <Routes>
            {/* Public Auth routes */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            {/* Protected Admin routes */}
            <Route element={<ProtectedRoutes />}>
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AllRoutes;