import { CheckCircle, CircleCheckBig, Clock, Download, Ellipsis, Eye, Filter, Package, Search, Truck, X, XCircle } from "lucide-react";
import { useState } from "react";


// order stats
const orderStats = [
    {
        title: "Total Orders",
        value: "1,429",
        icon: Package,
        color: "from-blue-400 to-blue-600",

    },
    {
        title: "Pending",
        value: "45",
        icon: Clock,
        color: "from-yellow-400 to-yellow-600",

    },
    {
        title: "Shipped",
        value: "128",
        icon: Truck,
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Delivered",
        value: "1,203",
        icon: CircleCheckBig,
        color: "from-green-400 to-green-600",
    },
];


// recent orders
const orders = [
    {
        id: 'ORD-12345',
        customer: 'John Doe',
        email: 'john@example.com',
        amount: 129.99,
        status: 'delivered',
        date: new Date('2024-01-15'),
        items: 2,
        paymentMethod: 'Credit Card'
    },
    {
        id: 'ORD-12346',
        customer: 'Jane Smith',
        email: 'jane@example.com',
        amount: 79.50,
        status: 'shipped',
        date: new Date('2024-01-14'),
        items: 1,
        paymentMethod: 'PayPal'
    },
    {
        id: 'ORD-12347',
        customer: 'Bob Johnson',
        email: 'bob@example.com',
        amount: 199.99,
        status: 'processing',
        date: new Date('2024-01-13'),
        items: 3,
        paymentMethod: 'Credit Card'
    },
    {
        id: 'ORD-12348',
        customer: 'Alice Brown',
        email: 'alice@example.com',
        amount: 49.99,
        status: 'pending',
        date: new Date('2024-01-12'),
        items: 1,
        paymentMethod: 'Bank Transfer'
    },
    {
        id: 'ORD-12349',
        customer: 'Charlie Wilson',
        email: 'charlie@example.com',
        amount: 89.99,
        status: 'cancelled',
        date: new Date('2024-01-11'),
        items: 2,
        paymentMethod: 'Credit Card'
    }
];

// icon based on order status
const getStatusIcon = (status) => {
    switch (status) {
        case 'pending':
            return <Clock className="w-4 h-4" />;
        case 'processing':
            return <Package className="w-4 h-4" />;
        case 'shipped':
            return <Truck className="w-4 h-4" />;
        case 'delivered':
            return <CheckCircle className="w-4 h-4" />;
        case 'cancelled':
            return <XCircle className="w-4 h-4" />;
        default:
            return <Clock className="w-4 h-4" />;
    }
};

// color based on order status
const getStatusColor = (status) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
        case 'processing':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
        case 'shipped':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
        case 'delivered':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
        case 'cancelled':
            return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
};


export const Orders = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("all");


    // filter order based on status and search
    const filteredOrders = orders.filter((order) => {
        const searchMatch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.email.toLowerCase().includes(searchTerm.toLowerCase());
        const statusMatch = selectedStatus === "all" || order.status === selectedStatus;

        return searchMatch && statusMatch;
    });


    const OrderDetailModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
            <div className="max-w-2xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-y-auto">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Order Details - {selectedOrder?.id}</h2>
                        <button
                            onClick={() => setSelectedOrder(null)}
                            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {selectedOrder &&
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Customer Information</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
                                        <p className="text-gray-900 dark:text-white">{selectedOrder.customer}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                                        <p className="text-gray-900 dark:text-white">{selectedOrder.email}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Order Date</label>
                                        <p className="text-gray-900 dark:text-white">{selectedOrder.date.toLocaleDateString("en-us", { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Information</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</label>
                                        <div>
                                            <span className={`inline-flex items-center gap-1 text-gray-900 text-sm dark:text-white px-2 ${getStatusColor(selectedOrder.status)} rounded-full`}>
                                                {getStatusIcon(selectedOrder.status)}
                                                {selectedOrder.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Payment Method</label>
                                        <p className="text-gray-900 dark:text-white">{selectedOrder.paymentMethod}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Amount</label>
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">${selectedOrder.amount}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            <h3 className="text-lg text-gray-900 dark:text-white mb-4">Order Items</h3>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center justify-between py-2">
                                    <p className="text-gray-600 dark:text-gray-400">Wireless Bluetooth Headphones</p>
                                    <p className="font-medium text-gray-900 dark:text-white">$79.99</p>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <p className="text-gray-600 dark:text-gray-400">Premium Cotton T-Shirt</p>
                                    <p className="font-medium text-gray-900 dark:text-white">$29.99</p>
                                </div>
                                <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-900 dark:text-gray-white font-medium">Total</p>
                                        <p className="font-bold text-gray-900 dark:text-white">${selectedOrder.amount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="px-6 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                Close
                            </button>
                            <button className="px-6 py-2 text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-200">Update Status</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    );



    return (
        <>
            <div className="order-dashboard space-y-6">
                {/* header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Orders</h1>
                        <p className="text-gray-600 dark:text-gray-400">Manage and track customer orders</p>
                    </div>
                    <button className="inline-flex items-center gap-2 text-white font-medium bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 rounded-lg shadow-lg hover-bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:scale-105 transition-all duration-200">
                        <Download className="w-5 h-5" />
                        Export Orders
                    </button>
                </div>

                {/* orders stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {orderStats.map((order, index) => {
                        const Icon = order.icon;

                        return (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-700 dark:text-gray-400 font-medium">{order.title}</p>
                                        <p className="text-2xl text-gray-900 dark:text-white font-bold">{order.value}</p>
                                    </div>
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${order.color}`}>
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
                                    placeholder="Search orders..."
                                    className="w-full px-10 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:focus:ring-secondary-500" />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="bg-white dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transitions-colors">
                                <Filter className="w-4 h-4 mr-2" />
                                More Filters
                            </button>
                        </div>
                    </div>

                </div>

                {/* recent order table  */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-7000 rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order Id</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Items</th>
                                    <th className="px-6 py-4 text-xs font-medium text-left text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-medium text-right text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredOrders.map((order, index) => {
                                    const date = order.date.toLocaleDateString("en-us", { year: 'numeric', month: 'short', day: 'numeric' });
                                    const Icon = getStatusIcon(order.status);

                                    return (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-900 dark:white ">{order.customer}</span>
                                                    <span className="text-gray-500 dark:text-gray-400">{order.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{date}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">${order.amount}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.items} items</td>
                                            <td className="px-6 py-4">
                                                <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                    {Icon}
                                                    <span className="capitalize">{order.status}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400 dark:text-gray-600">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => setSelectedOrder(order)}
                                                        className="p-2 hover:text-gray-600 dark:hover:text-gray-300">
                                                        <Eye className="w-4 h-4" />
                                                    </button>
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
                    <p className="text-sm text-gray-600">Showing <strong>1-5</strong> of <strong>97</strong> results </p>

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
            {selectedOrder && <OrderDetailModal />}
        </>
    )
};
