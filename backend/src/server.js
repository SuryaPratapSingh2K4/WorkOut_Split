import express from "express";
import workoutRoutes from "./routes/workouts.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
import cors from 'cors';
// import userRoutes from './routes/user.js'
import userRoutes from './routes/user.js'

const app = express();
app.use(cors());
// export const PORT = 5000;

app.use(express.json());


app.use("/api/workouts", workoutRoutes);
app.use("/api/users",userRoutes)

// app.get('/',(req,res) => {
//     res.json({message: "Welcome to the app"})

// })
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server Host connected to localhost:${process.env.PORT}`);
    });
});
