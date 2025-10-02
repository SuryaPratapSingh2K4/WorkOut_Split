import express from 'express'

const router = express.Router();

router.get('/',(req,res) => {
    res.status(201).json({message: "Get all the workout plan"})
})

router.get('/:id',(req,res) => {
    res.status(201).json({message: 'Get the unique workout plan'})
})

router.post('/',(req,res) => {
    res.status(201).json({message: 'Create the workout plan'})
})

router.delete('/:id',(req,res) => {
    res.status(201).json({message: 'Delete the workout plan'})
})

router.put('/:id',(req,res) => {
    res.status(201).json({message: 'Update the workout plan'})
})

export default router;