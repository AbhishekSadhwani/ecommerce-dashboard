import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar will go here */}
            <div className="w-72 bg-white">
                <Sidebar />
            </div>

            <div className="flex-1">
                {/* Navbar will go here */}
                <div className="h-16 bg-white shadow px-4 flex items-center">Navbar</div>

                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
