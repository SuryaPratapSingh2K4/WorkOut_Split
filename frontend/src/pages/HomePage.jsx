import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Card from '../components/Card';

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [workOut, setWorkOut] = useState([]);

    useEffect(() => {
        const fetchedData = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/workouts')
                const data = await res.json();
                const sordteddata = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                console.log("Fetched WorkOut plan : ", sordteddata);
                setWorkOut(sordteddata)
                setLoading(false)
            } catch (error) {
                console.error('Error in fetching data from backend', error);
                setLoading(false)
            }
        }
        fetchedData();

    }, [])

    return (
        <div className='min-h-screen'>
            <div className='p-4 mt-6 mx-auto max-w-7xl'>
                {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {workOut.map((plan) => (
                        <Card key={plan._id} plan={plan}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
