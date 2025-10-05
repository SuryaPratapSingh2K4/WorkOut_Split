import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signupUser } from '../api/auth';

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const data = await signupUser(email,password);
            login(data);
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <form onSubmit={handleSignup} className="flex flex-col gap-3 w-80">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    placeholder="Password (Strong)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                />
                <button type="submit" className="btn btn-primary">
                    Signup
                </button>
            </form>

            <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 underline">
                    Login
                </Link>
            </p>
        </div>
    )
}

export default SignUpPage
