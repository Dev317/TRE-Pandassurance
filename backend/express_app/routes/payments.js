import express from 'express';

import { createPayment, getPaymentsByContractId } from '../controllers/payments.js';

const router = express.Router();

router.post('/create', createPayment);
router.get('/:contractId', getPaymentsByContractId);


export default router;