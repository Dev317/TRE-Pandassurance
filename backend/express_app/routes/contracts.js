import express from 'express';

import { createContract, readContract } from '../controllers/contracts.js';

const router = express.Router();

router.post('/create', createContract);
router.get('/:id', readContract);


export default router;