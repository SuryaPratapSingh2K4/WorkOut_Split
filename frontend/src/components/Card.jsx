import React from 'react'
import { Link } from 'react-router-dom'
import { Trash2Icon,PenSquareIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function Card({ plan }) {
    const navigate = useNavigate();
    const handleDelete = async (plan_id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/workouts/${plan_id}`,{
                method: 'DELETE',
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify()
            });
            console.log("Note has been successfully deleted",res);
            navigate('/')
        } catch (error) {
            console.error("error in deleteing the Card",error);
        }
    }
    return <Link to={`/update/${plan._id}`} className=''>
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">WorkOut : <span>{plan.title}</span></h2>
                <h3>Reps of an exercise : <span>{plan.reps}</span></h3>
                <h3>Load for an exercise : <span>{plan.load}</span></h3>
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        <button
                            className="btn btn-ghost btn-xs text-error"
                            onClick={() => handleDelete(plan._id)}
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Link>
}

export default Card
