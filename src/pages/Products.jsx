import { ChevronLeft, DollarSign, Ellipsis, Eye, Filter, Package, Plus, Search, SquarePen, Trash2, TrendingUp, TriangleAlert } from "lucide-react";

// product stats
const productStats = [
    {
        title: "Total Products",
        value: "2,456",
        icon: Package,
        color: "from-blue-400 to-blue-600",

    },
    {
        title: "Total Value",
        value: "$89,432",
        icon: DollarSign,
        color: "from-green-400 to-green-600",

    },
    {
        title: "Top Seller",
        value: "234",
        icon: TrendingUp,
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Low Stock",
        value: "12",
        icon: TriangleAlert,
        color: "from-red-400 to-red-600",
    },
];

// products
const products = [
    {
        id: '1',
        name: 'Wireless Bluetooth Headphones',
        category: 'Electronics',
        price: 79.99,
        stock: 45,
        status: 'active',
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
        sales: 234
    },
    {
        id: '2',
        name: 'Premium Cotton T-Shirt',
        category: 'Clothing',
        price: 29.99,
        stock: 3,
        status: 'Low Stock',
        image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=200',
        sales: 156
    },
    {
        id: '3',
        name: 'Smart Watch Series 5',
        category: 'Electronics',
        price: 299.99,
        stock: 23,
        status: 'active',
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200',
        sales: 89
    },
    {
        id: '4',
        name: 'Organic Coffee Beans',
        category: 'Food',
        price: 24.99,
        stock: 0,
        status: 'inactive',
        image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=200',
        sales: 67
    }
];



export const Products = () => {
    return (
        <div className="product-dashboard space-y-6">
            {/* header */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Products</h1>
                    <p className="text-md text-gray-600 dark:text-gray-400">Manage your product inventory and catalog</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:scale-105 transitions duration-200">
                    <Plus className="w-5 h-5" />
                    <span className="text-md font-medium">Add Product</span>
                </button>
            </div>
            {/* stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productStats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-100">{stat.title}</h3>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">{stat.value}</p>
                                </div>
                                <div className={`bg-gradient-to-r ${stat.color} rounded-lg p-3`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* search bar */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" placeholder="Search products..." className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-500 focus:border-transparent" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <select className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500">
                            <option value="all">All Categories</option>
                            <option value="active">Electronics</option>
                            <option value="inactive">Clothing</option>
                            <option value="inactive">Food</option>
                            <option value="inactive">Books</option>
                            <option value="inactive">Home</option>
                        </select>
                        <button className="inline-flex items-center text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 rounded-lg px-4 py-2">
                            <Filter className="mr-2 w-4 h-4" />
                            More Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* product table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr className="">
                                <th className="px-6 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Product</th>
                                <th className="px-6 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Category</th>
                                <th className="px-6 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Price</th>
                                <th className="px-6 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Stock</th>
                                <th className="px-6 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Sales</th>
                                <th className="px-6 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Status</th>
                                <th className="px-6 py-4 text-right whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">ID: {product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-100">{product.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">${product.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-100">{product.stock}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-100">{product.sales}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' : product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                                    <SquarePen className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-gray-300 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
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
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Showing <strong>1-4</strong> of <strong>97</strong> results </p>

                <div className="space-x-2">
                    <button className="px-3 py-2 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg">
                        Previous
                    </button>
                    <button className="px-3 py-2 text-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg">1</button>
                    <button className="px-3 py-2 text-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg">2</button>
                    <button className="px-3 py-2 text-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg">3</button>
                    <button className="px-3 py-2 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg">
                        Next
                    </button>

                </div>

            </div>
        </div>
    );
};
