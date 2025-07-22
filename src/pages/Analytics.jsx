import { DollarSign, Download, Filter, ShoppingCart, TrendingDown, TrendingUp, Users } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Cell, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


// last 7 days data
const salesData = [
    { date: '2024-01-01', revenue: 4200, orders: 52, customers: 34 },
    { date: '2024-01-02', revenue: 3800, orders: 48, customers: 31 },
    { date: '2024-01-03', revenue: 5200, orders: 65, customers: 42 },
    { date: '2024-01-04', revenue: 4800, orders: 60, customers: 38 },
    { date: '2024-01-05', revenue: 6200, orders: 78, customers: 51 },
    { date: '2024-01-06', revenue: 5800, orders: 72, customers: 47 },
    { date: '2024-01-07', revenue: 7200, orders: 90, customers: 58 },
];

// card stats
const analyticsCards = [
    {
        title: 'Total Revenue',
        value: '$54,239',
        change: '+12.5%',
        changeType: 'increase',
        icon: DollarSign,
        color: 'from-green-400 to-green-600',
    },
    {
        title: 'Orders',
        value: '1,429',
        change: '+3.2%',
        changeType: 'increase',
        icon: ShoppingCart,
        color: 'from-blue-400 to-blue-600',
    },
    {
        title: 'Customers',
        value: '9,721',
        change: '-1.1%',
        changeType: 'decrease',
        icon: Users,
        color: 'from-purple-400 to-purple-600',
    },
    {
        title: 'Avg. Order Value',
        value: '$37.95',
        change: '+8.7%',
        changeType: 'increase',
        icon: TrendingUp,
        color: 'from-orange-400 to-orange-600',
    },
];


const topProducts = [
    { name: 'Wireless Headphones', sales: 234, revenue: 18720, growth: 12.5 },
    { name: 'Smart Watch', sales: 189, revenue: 56670, growth: 8.3 },
    { name: 'Cotton T-Shirt', sales: 156, revenue: 4680, growth: -2.1 },
    { name: 'Coffee Beans', sales: 134, revenue: 3350, growth: 15.7 },
    { name: 'Yoga Mat', sales: 98, revenue: 2940, growth: 5.2 },
];

const categoryData = [
    { name: 'Electronics', value: 35, revenue: 28500, color: '#8B5CF6' },
    { name: 'Clothing', value: 25, revenue: 20300, color: '#06B6D4' },
    { name: 'Books', value: 20, revenue: 16200, color: '#10B981' },
    { name: 'Home & Garden', value: 20, revenue: 16000, color: '#F59E0B' },
];

const trafficSources = [
    { source: 'Organic Search', visitors: 45230, percentage: 42.3, color: '#10B981' },
    { source: 'Direct', visitors: 28450, percentage: 26.6, color: '#8B5CF6' },
    { source: 'Social Media', visitors: 18920, percentage: 17.7, color: '#06B6D4' },
    { source: 'Email', visitors: 9840, percentage: 9.2, color: '#F59E0B' },
    { source: 'Paid Ads', visitors: 4560, percentage: 4.2, color: '#EF4444' },
];

export const Analytics = () => {
    return (
        <div className="space-y-8">
            {/* header */}
            <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
                    <p className="text-gray-600 dark:text-gray-400">Track your business performance and insights</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <div className="flex items-center gap-2">
                        <select
                            className="bg-white dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                            <option value="all">Last 7 days</option>
                            <option value="admin">Last 30 days</option>
                            <option value="manager">Last 90 days</option>
                            <option value="staff">Last year</option>
                        </select>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transitions-colors">
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </button>
                    </div>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600">
                        <Download className="w-4 h-4" />
                        <span className="font-medium">Export</span>
                    </button>
                </div>
            </div>
            {/* stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {analyticsCards.map((stat, index) => {
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
                                {stat.changeType === "increase" ? (
                                    <TrendingUp className="mr-1 w-4 h-4 text-green-500" />
                                ) : (
                                    <TrendingDown className="mr-1 w-4 h-4 text-red-500" />
                                )}
                                <span className={`text-sm font-medium ${stat.changeType === "increase" ? "text-green-600" : "text-red-600"}`}>{stat.change}</span>
                                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">vs last period</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* charts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Revenue Trend</h2>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-primary-500 rounded-full" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-secondary-500 rounded-full" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Orders</span>
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={salesData}>
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis
                            dataKey="date"
                            stroke="#6B7280"
                            tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        />
                        <YAxis stroke="#6B7280" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1F2937',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#F9FAFB',
                            }}
                            labelFormatter={(value) => new Date(value).toLocaleDateString()}
                            formatter={(value, name) => [
                                name === 'revenue' ? `$${value}` : value,
                                name === 'revenue' ? 'Revenue' : 'Orders'
                            ]}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#8B5CF6"
                            strokeWidth={3}
                            fill="url(#revenueGradient)"
                        />
                        {/* <Line
                            type="monotone"
                            dataKey="orders"
                            stroke="#7C3AED"
                            strokeWidth={2}
                            dot={{ fill: '#7C3AED', strokeWidth: 2, r: 4 }}
                        /> */}
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* category performance */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400 mb-6">Sales by Category</h3>
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
                                <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="space-y-3">
                            {categoryData.map((item, index) => (
                                <div key={index} className="flex justify-between items-center min-w-[200px]">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-400">{item.value}%</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">${item.revenue.toLocaleString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* traffic sources */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400 mb-6">Traffic Sources</h3>
                    <div className="space-y-4">
                        {trafficSources.map((source, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: source.color }} />
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-400">{source.source}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-400">{source.visitors.toLocaleString()}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{source.percentage}%</span>
                                    </div>
                                    <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                                        <div className="h-2 rounded-full" style={{ width: `${source.percentage}%`, backgroundColor: source.color }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            {/* top performing products */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Top Performing Products</h2>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Sales</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Revenue</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Growth</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {topProducts.map((product, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-400">{product.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{product.sales}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-400">${product.revenue.toLocaleString()}</td>
                                    <td className={`px-6 py-4`}>
                                        <div className="flex items-center gap-1">
                                            {product.growth >= 0 ? <TrendingUp className="w-4 h-4 text-green-500" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
                                            <span className={`text-sm font-medium ${product.growth >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                                                {product.growth >= 0 && "+"}{product.growth}%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

