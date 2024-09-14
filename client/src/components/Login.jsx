import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [activeButton, setActiveButton] = useState('login');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "demo" && password === "password") {
            navigate("/homepage");
        } else {
            alert("Wrong credentials");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
            <div className="p-5 w-96 max-w-sm mx-auto text-center bg-white shadow-lg rounded">
                <h3 className={`text-3xl font-bold mb-4 ${isLogin ? '' : 'mt-4'}`}>
                    {isLogin ? 'Log In' : 'Sign Up'}
                </h3>

                <p className="mb-2">By signing in you are agreeing</p>

                <p className="mb-2">
                    our <Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>
                </p>

                <button
                    onClick={() => {
                        setIsLogin(true);
                        setActiveButton('login');
                    }}
                    className={`mt-4 px-4 py-2 text-blue-600 border rounded ${activeButton === 'login' ? 'border-blue-600' : ''}`}
                >
                    Login
                </button>

                <button
                    onClick={() => {
                        setIsLogin(false);
                        setActiveButton('register');
                    }}
                    className={`mt-4 px-4 py-2 text-gray-700 bg-gray-200 rounded ${activeButton === 'register' ? 'bg-blue-600 text-white' : ''}`}
                >
                    Register
                </button>

                <form onSubmit={handleSubmit}>
                    <div className="flex items-center mt-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <input
                            type="text"
                            className="w-full pl-4 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={isLogin ? 'Username' : 'Email'}
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#A6A6A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <input
                            type="password"
                            className="w-full pl-4 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={isLogin ? 'Password' : 'New Password'}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <label className="mr-2 cursor-pointer">
                            <input type="checkbox" className="cursor-pointer" />
                            Remember password
                        </label>
                        <Link href="#" className="text-sm text-gray-600 hover:underline">Forgot Password</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
                <p className="mt-4">
                    Or connect with
                </p>
                <div className="flex items-center justify-center">
                    {/* SVG icons remain unchanged */}
                </div>
            </div>
        </div>
    );
};

export default Login;
