import { useState } from "react";
import { Store, User } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sidebar">
            <div className="sidebar-header border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1 px-5 py-3">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl rounded-lg p-2">
                        <Store className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-2">
                        <h3 className="text-lg font-bold">AdminPro</h3>
                        <p className="text-xs text-gray-500">eCommerce Dashboard</p>
                    </div>
                </div>
            </div>
            <div className="sidebar-user-info">
                <div className="flex items-center p-4">
                    <div className="bg-success-500   shadow-xl rounded-full p-2">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-2">
                        <p className="font-bold">John Doe</p>
                        <p className="text-xs text-gray-500">admin@example.com</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;