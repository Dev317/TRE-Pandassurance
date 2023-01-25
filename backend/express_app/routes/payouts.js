import express from 'express';

import { createPayout, getPayoutsByContractId } from '../controllers/payouts.js';

const router = express.Router();

router.post('/create', createPayout);
router.get('/:contractId', getPayoutsByContractId);


export default router;