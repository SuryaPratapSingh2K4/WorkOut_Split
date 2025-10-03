    import work from "../models/WorkOut.js";

    export async function getAllWorkOut(req, res) {
    try {
        // const data = work.find().sort((a,b) => {
        //     b.createdAt() - a.createdAt()
        // })
        const data = await work.find().sort({ createdAt: 1 });
        res.status(200).json(data);
    } catch (error) {
        console.log("Error in fetching the postWorkOut", error);
        res.status(500).json({ message: "Error in fetching the postWorkOut" });
    }
    }

    export async function getWorkOutId(req, res) {
    try {
        const data = await work.findById(req.params.id);
        res.status(201).json(data);
    } catch (error) {
        console.log("Error in fetching the particular postWorkOut", error);
        res.status(500).json({ message: "Error in particular postWorkOut" });
    }
    }

    export async function postWorkOut(req, res) {
    try {
        const { title, reps, load } = req.body;
        const newWork = new work({ title, reps, load });
        const savedWork = await newWork.save();
        res.status(201).json(savedWork);
    } catch (error) {
        console.log("Error in uploading the postWorkOut", error);
        res.status(500).json({ message: "Error in uploading the postWorkOut" });
    }
    }

    export async function deleteWorkOut(req, res) {
    try {
        const data = await work.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: "404 not Found" });
        res.status(201).json({ message: "workout plan deleted successfully" });
    } catch (error) {
        console.log("Error in deleting the postWorkOut", error);
        res.status(500).json({ message: "Error in deleting the postWorkOut" });
    }
    }

    export async function updateWorkOut(req, res) {
    try {
        const { title, reps, load } = req.body;
        const data = await work.findByIdAndUpdate(
        req.params.id,
        {
            title,
            reps,
            load,
        },
        {
            new: true,
        }
        );
        res.status(200).json(data);
    } catch (error) {
        console.log("Error in deleting the postWorkOut", error);
        res.status(500).json({ message: "Error in deleting the postWorkOut" });
    }
    }
