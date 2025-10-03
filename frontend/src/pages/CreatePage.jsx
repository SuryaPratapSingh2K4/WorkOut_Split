import React, { useState } from 'react'
import { Link } from 'lucide-react'
import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function CreatePage() {
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            setLoading(true)
            const data = {
                title,
                reps,
                load
            }
            const res = await fetch('http://localhost:5000/api/workouts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const info = await res.json();
            console.log("Created Data successfully", info);
            setLoading(false);
            navigate('/')
        } catch (error) {
            console.error('Error in creating the wworkout plan', error);
            setLoading(false)
        }
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Reps
                            <input type="number" className="grow" placeholder="Reps to be done"
                                value={reps}
                                onChange={(e) => setReps(e.target.value)} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Load
                            <input type="number" className="grow" placeholder="Load to carry"
                                value={load}
                                onChange={(e) => setLoad(e.target.value)} />
                        </label>
                        <div className='flex gap-4'>
                            <button className='btn btn-outline btn-success' onClick={handleSubmit}>{loading ? "Creating..." : "Create WorkOut Plan"}</button>
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

export default CreatePage
