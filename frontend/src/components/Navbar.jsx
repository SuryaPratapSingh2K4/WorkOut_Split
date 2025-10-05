import { PlusIcon, LogOutIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className='bg-base-300'>
            <div className='mx-auto max-w-6xl p-4 flex justify-between items-center'>
                <h1 className='text-3xl font-bold tracking-tight'>WorkOutPlan</h1>
                <div className='flex items-center gap-4'>
                    {user ? (
                        <>
                            <span className='text-sm'>Logged in as: {user.email}</span>
                            <Link to='/create' className="btn btn-primary flex items-center gap-1">
                                <PlusIcon /> New Plan
                            </Link>
                            <button onClick={logout} className="btn btn-error flex items-center gap-1">
                                <LogOutIcon /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className="btn btn-primary">Login</Link>
                            <Link to='/signup' className="btn btn-secondary">Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
