import express from 'express'
import { deleteWorkOut, getAllWorkOut, getWorkOutId, postWorkOut, updateWorkOut } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/',getAllWorkOut)

router.get('/:id',getWorkOutId)

router.post('/',postWorkOut);

router.delete('/:id',deleteWorkOut)

router.put('/:id',updateWorkOut)

export default router;