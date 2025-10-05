import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../api/auth';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(email,password)
            login(data);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                />
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>

            <p className="mt-3">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-400 underline">
                    Signup
                </Link>
            </p>
        </div>
    )
}

export default LoginPage
