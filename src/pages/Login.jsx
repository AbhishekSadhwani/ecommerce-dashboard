import { useState } from 'react';
import { Store, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (

        <div className="max-w-md w-full space-y-8">
            <div className="animate-slide-up">
                <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl rounded-2xl p-4">
                        <Store className="w-12 h-12 text-white" />
                    </div>
                </div>
                <div className="text-center mt-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sign in to your admin dashboard</p>
                </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4 animate-slide-down">
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Demo Credentials:</h3>
                <div className="mt-1 text-xs text-blue-700 dark:text-blue-400 space-y-1">
                    <div>
                        <strong>Admin: </strong>
                        admin@example.com / password
                    </div>
                    <div>
                        <strong>Manager: </strong>
                        manager@example.com / password
                    </div>
                    <div>
                        <strong>Staff: </strong>
                        staff@example.com / password
                    </div>
                </div>
            </div>

            {/* login form  */}
            <form className="mt-8 space-y-6 animate-fade-in" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email address</label>
                        <input
                            id="email"
                            type="email"
                            className="relative block w-full px-4 py-3 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-500 dark:placeholder:text-gray-600"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete="username"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="relative block w-full px-4 py-3 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-500 dark:placeholder:text-gray-600"
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(v => !v)}
                                tabIndex={-1}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
                {error && <div className="text-red-600 dark:text-red-400 text-sm text-center">{error}</div>}
                <div>
                    <button
                        type="submit"
                        className="text-sm mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg shadow-md hover:from-primary-600 hover:to-secondary-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : (<><span>Sign in</span> <span className="ml-1"><ArrowRight className="w-4 h-4" /></span></>)}
                    </button>
                </div>
            </form>

            {/* forgot password button */}
            <div className="mt-4">
                <a href="/forgot-password" className="text-primary-600 hover:underline text-sm">Forgot Password?</a>
            </div>
        </div>
    );
};
