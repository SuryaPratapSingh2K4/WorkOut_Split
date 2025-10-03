import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { LoaderIcon } from 'lucide-react';

function UpdateCard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/workouts/${id}`)
                const data = await res.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                console.error("erroe in fetching the data", error);
                setLoading(false)
            }
        }
        fetchedData();
    }, [id])
    const handleUpdate = async () => {
        setSaving(true);
        try {
            const res = await fetch(`http://localhost:5000/api/workouts/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ title: data.title, reps: data.reps, load: data.load })
            })
            const info = await res.json();
            setData(info);
            setLoading(false)
            navigate('/')
        } catch (error) {
            console.error("erroe in fetching the data", error);
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }
    return (
        <div className='min-h-screen bg-base-200'>
            <div className='container mx-auto px-4 py-8'>
                <div className='max-w-2xl mx-auto'>

                    <div className='flex flex-col items-center p-6 max-w-md mx-auto gap-4'>
                        <h1 className='text-bold text-3xl'>WorkOut Plan</h1>
                        <label className="input input-bordered flex items-center gap-2">
                            WorkOut Exercise
                            <input type="text" className="grow" placeholder="Enter your Workout exercise"
                                value={data.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Reps
                            <input type="number" className="grow" placeholder="Reps to be done"
                                value={data.reps}
                                onChange={(e) => setData({ ...data, reps: e.target.value })}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Load
                            <input type="number" className="grow" placeholder="Load to carry"
                                value={data.load}
                                onChange={(e) => setData({ ...data, load: e.target.value })}
                            />
                        </label>
                        <div className='flex gap-4'>
                            <button className='btn btn-outline btn-success' onClick={handleUpdate}>{saving ? "Updating..." : "Update Your WorkOut Plan"}</button>
                            <button className='btn btn-outline btn-error' onClick={() => navigate('/')}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard
