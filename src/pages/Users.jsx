import { Crown, Edit, Ellipsis, Eye, Filter, Mail, Phone, Plus, Search, Shield, Trash2, User, UsersRound, X } from "lucide-react";
import { useState } from "react";


// order stats
const userStats = [
    {
        title: "Total Users",
        value: "24",
        icon: UsersRound,
        color: "from-blue-400 to-blue-600",

    },
    {
        title: "Admins",
        value: "2",
        icon: Crown,
        color: "from-purple-400 to-purple-600",

    },
    {
        title: "Managers",
        value: "6",
        icon: Shield,
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Staff",
        value: "16",
        icon: User,
        color: "from-green-400 to-green-600",
    },
];


// recent orders
const users = [
    {
        id: '1',
        name: 'John Doe',
        email: 'admin@example.com',
        role: 'admin',
        status: 'active',
        lastLogin: new Date('2024-01-15T10:30:00'),
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 (555) 123-4567',
        department: 'IT'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'manager@example.com',
        role: 'manager',
        status: 'active',
        lastLogin: new Date('2024-01-14T14:20:00'),
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 (555) 234-5678',
        department: 'Sales'
    },
    {
        id: '3',
        name: 'Bob Johnson',
        email: 'staff@example.com',
        role: 'staff',
        status: 'active',
        lastLogin: new Date('2024-01-13T09:15:00'),
        avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 (555) 345-6789',
        department: 'Support'
    },
    {
        id: '4',
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        role: 'staff',
        status: 'inactive',
        lastLogin: new Date('2024-01-10T16:45:00'),
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
        phone: '+1 (555) 456-7890',
        department: 'Marketing'
    }
];

// icon based on order status
const getRoleIcon = (role) => {
    switch (role) {
        case 'admin':
            return <Crown className="w-4 h-4" />;
        case 'manager':
            return <Shield className="w-4 h-4" />;
        case 'staff':
            return <User className="w-4 h-4" />;
        default:
            return <User className="w-4 h-4" />;
    }
};

// color based on order status
const getRoleColor = (role) => {
    switch (role) {
        case 'admin':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
        case 'manager':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
        case 'staff':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
};


export const Users = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState("all");


    // filter order based on status and search
    const filteredUser = users.filter((user) => {
        const searchMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const roleMatch = selectedRole === "all" || user.role === selectedRole;

        return searchMatch && roleMatch;
    });


    const UserEditModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
            <div className="max-w-2xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-y-auto">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedRole ? "Edit User" : "Add New User"}</h2>
                        <button
                            onClick={() => {
                                setSelectedUser(null)
                                setShowModal(false)
                            }}
                            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <button className="bg-primary-500 px-4 py-2 text-white rounded-lg hover:bg-primary-600 transition-colors">Upload Photo</button>
                            <p className="text-sm text-gray-500 mt-2">JPG, PNG up to 2MB</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                value={selectedUser?.name}
                                className="px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Address</label>
                            <input
                                type="text"
                                placeholder="Enter email address"
                                value={selectedUser?.email}
                                className="px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Enter phone number"
                                value={selectedUser?.phone}
                                className="px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Department</label>
                            <input
                                type="text"
                                placeholder="Enter department"
                                value={selectedUser?.department}
                                className="px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Role</label>
                            <select className="px-4 py-3 border border-gray-300 rounded-lg">
                                <option value="staff">Staff</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Status</label>
                            <select className="px-4 py-3 border border-gray-300 rounded-lg">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                    </div>
                    {!selectedUser &&
                        <div className="block flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Temporary Password</label>
                            <input
                                type="text"
                                placeholder="Enter temporary password"
                                className="px-4 py-3 border border-gray-300 rounded-lg" />
                            <p className="text-sm text-gray-500">User will be prompted to change password on first login</p>
                        </div>
                    }
                </div>
                <div className="p-6 flex justify-end space-x-3 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => {
                            setSelectedUser(null)
                            setShowModal(false)
                        }}
                        className="px-6 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        Cancel
                    </button>
                    <button className="px-6 py-2 text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-200">{selectedUser ? "Update User" : "Create User"}</button>
                </div>
            </div>
        </div>
    );



    return (
        <>
            <div className="space-y-6">
                {/* header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
                        <p className="text-gray-600 dark:text-gray-400">Manage team members and their permissions</p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center gap-2 text-white font-medium bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 rounded-lg shadow-lg hover-bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:scale-105 transition-all duration-200"
                    >
                        <Plus className="w-5 h-5" />
                        Add User
                    </button>
                </div>

                {/* user stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {userStats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-700 dark:text-gray-400 font-medium">{stat.title}</p>
                                        <p className="text-2xl text-gray-900 dark:text-white font-bold">{stat.value}</p>
                                    </div>
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* search and filter bar */}
                <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 " />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search users..."
                                    className="w-full px-10 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:focus:ring-secondary-500" />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <select
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="bg-white dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                                <option value="all">All Roles</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="staff">Staff</option>
                            </select>
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transitions-colors">
                                <Filter className="w-4 h-4 mr-2" />
                                More Filters
                            </button>
                        </div>
                    </div>

                </div>

                {/* current users table  */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-7000 rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Login</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-medium text-right text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredUser.map((user, index) => {

                                    return (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <td className="px-6 py-4 text-sm">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-full overflow-x-hidden">
                                                        <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-gray-900 dark:white ">{user.name}</span>
                                                        <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                                            <Mail className="w-3 h-3" />
                                                            {user.email}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                                            <Phone className="w-3 h-3" />
                                                            {user.phone}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                                                    {getRoleIcon(user.role)}
                                                    <span className="capitalize">{user.role}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.department}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.lastLogin.toLocaleDateString()}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.status === "active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}>{user.status}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400 dark:text-gray-600">
                                                <div className="flex items-center justify-end gap-2">
                                                    {/* view */}
                                                    <button className="p-2 hover:text-gray-600 dark:hover:text-gray-300">
                                                        <Eye className="w-4 h-4" />
                                                    </button>

                                                    {/* edit */}
                                                    <button
                                                        onClick={() => {
                                                            setSelectedUser(user)
                                                            setShowModal(true)
                                                        }}
                                                        className="p-2 hover:text-gray-600 dark:hover:text-gray-300"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </button>

                                                    {/* delete */}
                                                    {user.role != "admin" &&
                                                        <button className="p-2 hover:text-red-700 dark:hover:text-red-300">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    }

                                                    {/* more options */}
                                                    <button className="p-2 hover:text-gray-700 dark:hover:text-gray-300">
                                                        <Ellipsis className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* pagination */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">Showing <strong>1-4</strong> of <strong>24</strong> results </p>

                    <div className="space-x-2">
                        <button className="px-3 py-2 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 rounded-lg">
                            Previous
                        </button>
                        <button className="px-3 py-2 text-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg">1</button>
                        <button className="px-3 py-2 text-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg">2</button>
                        <button className="px-3 py-2 text-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg">3</button>
                        <button className="px-3 py-2 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 rounded-lg">
                            Next
                        </button>
                    </div>
                </div>

            </div >
            {showModal && <UserEditModal />}
        </>
    )
};
