import { ChevronLeft, DollarSign, Ellipsis, Eye, Filter, Package, Package2, Plus, Search, SquarePen, Trash2, TrendingUp, TriangleAlert, X } from "lucide-react";
import { useState } from "react";

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
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    // filter products based on search and category
    const filteredProducts = products.filter((product) => {
        const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
        return searchMatch && categoryMatch;
    });


    // product add or edit modal
    const ProductModal = () => (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm p-4 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-y-auto">
                <div className="p-6 border-b border-gray-200 dark-border-gray-700">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-white">{selectedProduct ? "Edit Product" : "Add new product"}</h2>
                        <button
                            onClick={() => {
                                setShowModal(false)
                                setSelectedProduct(null)
                            }}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transitions-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
                            <input
                                type="text"
                                placeholder="Enter product name"
                                defaultValue={selectedProduct?.name}
                                className="px-4 py-3 w-full border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <select
                                name="category"
                                defaultValue={selectedProduct?.category || "Electronics"}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Food">Food</option>
                                <option value="Books">Books</option>
                                <option value="Home">Home</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                defaultValue={selectedProduct?.price}
                                className="px-4 py-3 w-full border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Stock Quantity</label>
                            <input
                                type="number"
                                placeholder="0"
                                defaultValue={selectedProduct?.stock}
                                className="px-4 py-3 w-full border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                        <textarea
                            rows={4}
                            placeholder="Enter product description"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Images</label>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center p-6">
                            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 dark:text-gray-400 mb-1">Click to upload or drag and drop</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 ">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">

                    <button
                        onClick={() => {
                            setShowModal(false)
                            setSelectedProduct(null)
                        }}
                        className="px-6 py-2 rounded-lg border border-gray-300 text-gray-800 "
                    >
                        Cancel
                    </button>
                    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white">{selectedProduct ? "Update Product" : "Create Product"}</button>
                </div>
            </div>
        </div>

    );



    return (
        <div className="product-dashboard">
            <div className="space-y-6">
                {/* header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Products</h1>
                        <p className="text-md text-gray-600 dark:text-gray-400">Manage your product inventory and catalog</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:scale-105 transitions duration-200">
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
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    type="text"
                                    placeholder="Search products..."
                                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-500 focus:border-transparent" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <select
                                value={selectedCategory == "ALL" ? "All Categories" : selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500">
                                <option value="All">All Categories</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Food">Food</option>
                                <option value="Books">Books</option>
                                <option value="Home">Home</option>
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
                                {filteredProducts.map((product, index) => {
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
                                                    <button
                                                        onClick={() => {
                                                            setShowModal(true)
                                                            setSelectedProduct(product)
                                                        }}
                                                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                    >
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
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">Showing <strong>1-4</strong> of <strong>97</strong> results </p>

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
            </div>
            {/* show product add or edit modal based on user interaction */}
            {showModal && <ProductModal />}

        </div>
    );
};
