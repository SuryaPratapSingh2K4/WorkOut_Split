import mongoose from "mongoose";

const WorkOutSchema = mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        reps: {
        type: Number,
        required: true,
        },
        load: {
        type: Number,
        required: true,
        },
    },
    {
        timestamps: true,
    }
);

const work = mongoose.model('workout',WorkOutSchema)
export default work;
