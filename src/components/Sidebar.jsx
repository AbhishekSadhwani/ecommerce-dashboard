import { useState } from "react";
import { ChartColumn, LayoutDashboard, LogOut, Package, Settings, ShoppingCart, Store, User, Users, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// navigation menu items
const NavMenu = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Package, label: "Products", path: "/products" },
    { icon: ShoppingCart, label: "Orders", path: "/orders" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: ChartColumn, label: "Analytics", path: "/analytics" },
    { icon: Settings, label: "Settings", path: "/settings" }
];


const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    // using useLocation hook by react router to get the pathname
    const pathname = useLocation().pathname;

    return (
        <>
            {
                isSidebarOpen && (<div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>)
            }
            <div className={`sidebar fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-800 transition-transform duration-300 lg:translate-x-0 lg:inset-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    {/* sidebar header */}
                    <div className="sidebar-header flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg p-2">
                                <Store className="w-6 h-6 text-white" />
                            </div>
                            <div className="ml-2">
                                <h3 className="text-lg font-bold">AdminPro</h3>
                                <p className="text-xs text-gray-500">eCommerce Dashboard</p>
                            </div>
                        </div>
                        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <X className="text-gray-900 w-5 h-5" />
                        </button>
                    </div>
                    {/* sidebar user info */}
                    <div className="sidebar-user-info border-b border-gray-200 dark:border-gray-800 p-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center rounded-full">
                                <span className="text-white text-sm font-medium">JD</span>
                            </div>
                            <div className="flex-1 ">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
                                <p className="inline-flex items-center bg-primary-100 dark:bg-primary-900 mt-1 px-2 py-0.5 text-primary-800 dark:text-primary-100 font-medium text-xs rounded-full">admin</p>
                            </div>
                        </div>
                    </div>
                    {/* sidebar menu */}
                    <nav className="flex-1 sidebar-menu p-4 space-y-2">
                        {NavMenu.map((item, index) => {
                            // checking if the current path is the same as the item path
                            // if item is active will provide dynamic class name
                            const isActive = pathname === item.path;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-200 group 
                                                ${isActive ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg "
                                            :
                                            "hover:bg-gray-100 dark:hover:bg-gray-800"
                                        }`}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <Icon className={`mr-3 w-5 h-5 ${isActive ? "text-white" : "text-gray-500"} transition-transform duration-200 hover:text-gray-700 group-hover:scale-110`} />
                                    <span className={`${isActive ? "text-white" : "text-gray-700"} font-medium`}>{item.label}</span>
                                    {isActive && <span className="ml-auto bg-white w-2 h-2 rounded-full animate-pulse"></span>}
                                </Link>
                            );
                        })}
                    </nav>
                    {/* sidebar footer */}
                    <div className="sidebar-footer p-4 border-t border-gray-200 dark:border-gray-800">
                        <Link to="/login" className="px-4 py-3 text-red-700 w-full flex items-center space-x-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900 transition-all duration-200 group">
                            <LogOut className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                            <span className="text-sm font-medium">Sign out</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;