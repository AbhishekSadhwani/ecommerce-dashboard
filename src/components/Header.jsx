import { Bell, Moon, Search } from "lucide-react";

const Header = ({ setIsMenuOpen }) => {
    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* mobile menu button */}
                    <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {/* search input */}
                    <div className="flex-1 flex items-center justify-center lg:justify-start">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <div className="relative">
                                <div className="absolute inset-y-0 text-gray-400 left-0 flex items-center pl-3">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="block w-full text-sm pl-10 px-4 py-2 placeholder-gray-500 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 transition-all duration-200"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* theme toggle button */}
                        <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200">
                            <Moon className="w-5 h-5" />
                        </button>

                        {/* notification button */}
                        <button className="relative p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 ">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;