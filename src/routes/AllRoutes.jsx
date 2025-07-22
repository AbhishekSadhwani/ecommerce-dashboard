import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';
import { Login, Dashboard, Products, Orders, Users, Analytics, Settings } from '../pages';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
            </Route>
            <Route path='/' element={<AdminLayout />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='products' element={<Products />} />
                <Route path='orders' element={<Orders />} />
                <Route path='users' element={<Users />} />
                <Route path='analytics' element={<Analytics />} />
                <Route path='settings' element={<Settings />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;