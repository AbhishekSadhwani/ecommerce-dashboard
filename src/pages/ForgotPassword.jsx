import { useState, useEffect } from 'react';
import { Store, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    // State variables for email input, success message, loading state, and redirecting
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [redirecting, setRedirecting] = useState(false);


    // Redirect to login after success
    useEffect(() => {
        let timer;
        if (success) {
            setRedirecting(true);
            timer = setTimeout(() => {
                navigate('/login');
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [success, navigate]);

    // handling the submit event
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        // Simulate sending reset link
        setTimeout(() => {
            setSuccess('If this email exists, a reset link has been sent.');
            setLoading(false);
        }, 1200);
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
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Forgot Password?</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enter your email to receive a reset link</p>
                </div>
            </div>
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
                </div>
                {success && (
                    <div className="text-green-600 dark:text-green-400 text-sm text-center">
                        {success}
                        <br />
                        Redirecting to <a href="/login" className="underline text-primary-600">Login</a> in 5 seconds...
                        <br />
                        Or <button type="button" className="underline text-primary-600" onClick={() => navigate('/login')}>click here</button> to go now.
                    </div>
                )}
                {!success && (
                    <div>
                        <button
                            type="submit"
                            className="text-sm mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg shadow-md hover:from-primary-600 hover:to-secondary-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : (<><span>Send Reset Link</span> <span className="ml-1"><ArrowRight className="w-4 h-4" /></span></>)}
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ForgotPassword; 