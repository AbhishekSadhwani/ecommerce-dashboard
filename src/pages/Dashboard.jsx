import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, Package, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// statistic data
const cardStats = [
    {
        title: "Total Revenue",
        value: "$54,239",
        icon: DollarSign,
        color: "from-green-400 to-green-600",
        percentage: "+12.5%",
        changeType: "up",
    },
    {
        title: "Orders",
        value: "1,429",
        icon: ShoppingCart,
        color: "from-blue-400 to-blue-600",
        percentage: "+3.2%",
        changeType: "up",
    },
    {
        title: "Customers",
        value: "9,721",
        icon: Users,
        color: "from-purple-400 to-purple-600",
        percentage: "-1.1%",
        changeType: "down",
    },
    {
        title: "Products",
        value: "2,456",
        icon: Package,
        color: "from-orange-400 to-orange-600",
        percentage: "+5.4%",
        changeType: "up",
    },
];

// sales data
const salesData = [
    { month: 'Jan', sales: 4000, orders: 240 },
    { month: 'Feb', sales: 3000, orders: 139 },
    { month: 'Mar', sales: 2000, orders: 980 },
    { month: 'Apr', sales: 2780, orders: 390 },
    { month: 'May', sales: 1890, orders: 480 },
    { month: 'Jun', sales: 2390, orders: 380 },
    { month: 'Jul', sales: 3490, orders: 430 },
    { month: 'Aug', sales: 5000, orders: 550 },
    { month: 'Sep', sales: 4200, orders: 490 },
    { month: 'Oct', sales: 3800, orders: 350 },
    { month: 'Nov', sales: 4500, orders: 510 },
    { month: 'Dec', sales: 5200, orders: 600 },
];

// category data
const categoryData = [
    { name: 'Electronics', value: 35, color: '#8B5CF6' },
    { name: 'Clothing', value: 25, color: '#06B6D4' },
    { name: 'Books', value: 20, color: '#10B981' },
    { name: 'Home', value: 20, color: '#F59E0B' },
];

// recent orders data
const recentOrders = [
    { orderId: "#12345", customer: 'John Doe', date: '2025-01-15', amount: '$129.99', status: 'completed' },
    { orderId: "#12346", customer: 'Jane Smith', date: '2025-01-15', amount: '$79.50', status: 'pending' },
    { orderId: "#12347", customer: 'Bob Johnson', date: '2025-01-14', amount: '$199.99', status: 'processing' },
    { orderId: "#12348", customer: 'Alice Brown', date: '2025-01-14', amount: '$49.99', status: 'completed' },
];


export const Dashboard = () => {

    return (
        <div className="dashboard-container space-y-8">
            {/* header */}
            <div className="flex gap-4 justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your store.</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600">
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">View Store</span>
                </button>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* total revenue */}
                {cardStats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }} >
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</h2>
                                    <p className="font-bold text-2xl text-gray-900 dark:text-white">{stat.value}</p>
                                </div>
                                <div className={`bg-gradient-to-r ${stat.color} rounded-lg p-3`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                {stat.changeType === "up" ? (
                                    <ArrowUpRight className="mr-1 w-4 h-4 text-green-500" />
                                ) : (
                                    <ArrowDownRight className="mr-1 w-4 h-4 text-red-500" />
                                )}
                                <span className={`text-sm font-medium ${stat.changeType === "up" ? "text-green-600" : "text-red-600"}`}>{stat.percentage}</span>
                                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">from last month</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* sales chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Sales Overview</h2>
                        <select className="bg-white text-gray-600 dark:text-gray-400 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm  transition-colors">
                            <option value="monthly">Last 7 months</option>
                            <option value="yearly">Last 12 months</option>
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                            <XAxis dataKey="month" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip contentStyle={{
                                backgroundColor: '#1F2937',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#F9FAFB',
                            }} />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#8B5CF6"
                                strokeWidth={3}
                                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                {/* category chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-400 mb-6">Sales by Category</h2>
                    <div className="flex justify-between items-center">
                        <ResponsiveContainer width="60%" height={200}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    innerRadius={40}
                                    paddingAngle={5}
                                >
                                    {categoryData.map((item, index) => (
                                        <Cell key={`cell-${index}`} fill={item.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="space-y-3">
                            {categoryData.map((item, index) => (
                                <div key={`label-${index}`} className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-400">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* recent orders */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Recent Orders</h2>
                        <Link to="/orders" className="text-sm font-medium text-primary-600 hover:text-primary-700">View all</Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">ORDER ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">CUSTOMER</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">AMOUNT</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">STATUS</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.orderId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{order.customer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">{order.amount}</td>
                                    <td className={`px-6 py-4 whitespace-nowrap`}>
                                        <span
                                            className={`inline-flex text-xs px-2 py-1 font-semibold rounded-full text-gray-600 dark:text-gray-400 ${order.status === "completed"
                                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400"
                                                : order.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400"
                                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400"
                                                }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
