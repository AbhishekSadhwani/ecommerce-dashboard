import { Bell, CreditCard, Eye, EyeOff, Key, Mail, Palette, Save, Shield, User } from "lucide-react";
import { useState } from "react";

export const Settings = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [showPassword, setShowPassword] = useState(false);
    const tabs = [
        { id: 'profile', name: 'Profile', icon: User },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Shield },
        { id: 'appearance', name: 'Appearance', icon: Palette },
        { id: 'billing', name: 'Billing', icon: CreditCard },
    ];

    // profile setting modal
    const ProfileSettingModal = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Full Name</label>
                        <input
                            type="text"
                            // value="John Doe"
                            className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Your Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Address</label>
                        <input
                            type="text"
                            // value="admin@example.com"
                            className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Your Email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Phone Number</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Job Title</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Your job title" />
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-4">Profile Picture</h3>
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center font-bold text-xl text-white">JD</div>
                    <div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">Upload New Photo</button>
                        <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 2MB</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Notification settings modal
    const NotificationSettingModal = () => (
        <div className="space-y-6">
            {/* email notifications */}
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Email Notifications</h3>
                <div className="space-y-4">
                    {/* new orders */}
                    <div className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">New Orders</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when new orders are placed</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="peer w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                    {/* new customers */}
                    <div className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">New Customers</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when new customers register</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="peer w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                    {/* low inventory */}
                    <div className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Low Inventory</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when products are running low</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="peer w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                    {/* weekly reports */}
                    <div className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Weekly Reports</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Receive weekly performance reports</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="peer w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                </div>
            </div>
            {/* push notifications */}
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Push Notifications</h3>
                <div className="space-y-4">
                    {/* browser notification */}
                    <div className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-gray-400" />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Browser Notifications</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Show notifications in your browser</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="peer w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                    {/* Mobile Push */}
                    <div className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-gray-400" />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Mobile Push</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Send notifications to your mobile device</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="peer w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );

    // security settings modal
    const SecuritySettingModal = () => (
        <div className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Change Password</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">Current Password</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="px-10 py-3 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">New Password</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="px-10 py-3 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">Confirm New Password</label>
                        <input
                            type="text"
                            className="text-gray-900 dark:text-white px-4 py-3 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                        <Key className="w-5 h-5 text-gray-400" />
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                            <p className="text-sm text-gray-500 dark:text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                    </div>
                    <button className="bg-primary-500 text-white rounded-lg px-4 py-2 hover:bg-primary-600 transition-colors">Enable 2FA</button>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Active Sessions</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                MacBook Pro
                                <span className="ml-2 text-xs text-green-800 bg-green-100 px-2 py-1 rounded-full">Current</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-600">San Francisco, CA</p>
                        </div>
                        {/* <button className="bg-primary-500 text-white rounded-lg px-4 py-2 hover:bg-primary-600 transition-colors">Enable 2FA</button> */}
                    </div>
                    <div className="flex items-center justify-between bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                iPhone 13
                                {/* <span className="ml-2 text-xs text-green-800 bg-green-100 px-2 py-1 rounded-full">Current</span> */}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-600">San Francisco, CA</p>
                        </div>
                        <button className="text-sm font-medium text-red-600 hover:text-red-700">Revoke</button>
                    </div>
                    <div className="flex items-center justify-between bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Chrome on Windows
                                {/* <span className="ml-2 text-xs text-green-800 bg-green-100 px-2 py-1 rounded-full">Current</span> */}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-600">New York, NY</p>
                        </div>
                        <button className="text-sm font-medium text-red-600 hover:text-red-700">Revoke</button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Appearance Settings modal
    const AppearanceSettingModal = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Theme</h3>
                <div className="flex items-center gap-4">
                    <div className="flex-1 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-8 rounded bg-white border border-gray-200 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Light</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Clean and bright interface</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gray-800 w-12 h-8 rounded border border-gray-200 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Dark</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Easy on the eyes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Language & Region</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-400 text-sm mb-2">Language</label>
                        <select className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent overflow-y-auto">
                            <option value="english (US)">English (US)</option>
                            <option value="">English (UK)</option>
                            <option value="">Spanish</option>
                            <option value="">French</option>
                            <option value="">German</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-400 text-sm mb-2">Timezone</label>
                        <select className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                            <option value="english (US)">Pacific Time (PT)</option>
                            <option value="">Mountain Time (MT)</option>
                            <option value="">Central Time (CT)</option>
                            <option value="">Eastern Time (ET)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    // billing setting modal
    const BillingSettingModal = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-4">Current Plan</h3>
                <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-gray-900 dark:text-white text-lg font-semibold">Professional Plan</h4>
                            <p className="text-gray-600 dark:text-gray-400">$29/month • Billed monthly</p>
                        </div>
                        <button className="text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Change Plan</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-4">Payment Method</h3>
                <div className="space-y-3">
                    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <CreditCard className="w-8 h-8 text-gray-400" />
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/25</p>
                                </div>
                            </div>
                            <div className="space-x-2">
                                <button className="font-medium text-sm text-primary-600 hover:text-primary-700">Edit</button>
                                <button className="font-medium text-sm text-red-600 hover:text-red-700">Remove</button>
                            </div>
                        </div>
                    </div>
                    <button className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                        + Add Payment Method
                    </button>
                </div>
            </div>
            <div>
                <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-4">Billing History</h3>
                <div className="space-y-3">
                    {[
                        { date: '2024-01-01', amount: '$29.00', status: 'Paid' },
                        { date: '2023-12-01', amount: '$29.00', status: 'Paid' },
                        { date: '2023-11-01', amount: '$29.00', status: 'Paid' },
                    ].map((invoice, index) => (
                        < div key={index} className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{invoice.date}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Professional Plan</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{invoice.amount}</span>
                                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full px-2 py-1">{invoice.status}</span>
                                    <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">Download</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );


    const modalToShow = () => {
        switch (activeTab) {
            case "profile":
                return <ProfileSettingModal />;
            case "notifications":
                return <NotificationSettingModal />;
            case "security":
                return <SecuritySettingModal />;
            case "appearance":
                return <AppearanceSettingModal />;
            case "billing":
                return <BillingSettingModal />;
            default:
                return <ProfileSettingModal />;
        };
    };



    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h3>
                <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* settings navbar */}
                <div className="lg:col-span-1">
                    <nav className="space-y-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full px-4 py-3 flex items-center gap-3 text-sm font-medium rounded-lg transition-all duration-200
                                            ${activeTab == tab.id ? "text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    {tab.name}
                                </button>
                            );
                        })}
                    </nav>
                </div>
                {/* settings modal */}
                <div className="lg:col-span-3">
                    <div className="bg-white dark:bg-gray-800 p-6 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700">

                        {modalToShow()}

                        {/* save button */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-end">
                                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium px-6 py-3 shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-bg-primary-600 hover:to-secondary-600 hover:scale-105 transition-all duration-200">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
