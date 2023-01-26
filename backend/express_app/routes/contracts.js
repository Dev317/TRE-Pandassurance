import express from 'express';

import { createContract, readContract, getContracts, updateContract, deleteContract } from '../controllers/contracts.js';

const router = express.Router();

router.post('/create', createContract);
router.get('/', getContracts);
router.get('/:id', readContract);
router.patch('/:id', updateContract);
router.delete('/:id', deleteContract);


export default router;