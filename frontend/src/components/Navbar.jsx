import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className='bg-base-300'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold tracking-tight '>WorkOutPlan</h1>
                    <div className='flex items-center gap-4'>
                        <Link to='/create' className="btn btn-primary">
                            <PlusIcon />
                            <span>New Plan</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
